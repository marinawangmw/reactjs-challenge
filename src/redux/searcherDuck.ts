import ApolloClient, { gql } from "apollo-boost";
import { Reducer } from "redux";
import {
	AppThunk,
	CLEAR_COLLECTION,
	CLEAR_ERROR,
	CLEAR_INPUT,
	Filter,
	FilterState,
	GET_COLLECTION_ERROR,
	GET_COLLECTION_PENDING,
	GET_COLLECTION_SUCCESS,
	SearcherState,
	SET_CURRENT_PAGE,
	SET_FILTER,
	SET_NAME,
	SET_TOTAL_PAGES,
	SET_TYPE,
} from "./reduxTypes";

let client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
});

// GraphQL Queries
const queries = {
	[Filter.characters]: `
        query($name:String,$type:String, $page:Int) {
            characters(page:$page,filter:{name:$name, type:$type}){
                info{
                    pages
                }
                results{
                    id
                    name
                    type
                    species
                    gender
                    image
                }
            }
        }`,

	[Filter.locations]: `
        query($name:String,$type:String, $page:Int) {
            locations(page:$page,filter:{name:$name, type:$type}){
                info{
                    pages
                }
                results{
                    id
                    name
                    dimension
                    residents{
                        name
                        image
                    }
                }
            }
        }`,

	[Filter.episodes]: `
        query($name:String, $page:Int) {
            episodes(page:$page,filter:{name:$name}){
                info{
                    pages
                }
                results{
                    id
                    name
                    air_date
                    episode
                    characters{
                    name
                    image
                    }
                }
            }
        }`,
};

// STATES
const initialFilterState: FilterState = {
	collection: [],
	inputType: "",
	inputName: "",
	fetching: false,
	error: false,
	page: 1,
	totalPages: 0,
};

const initialData: SearcherState = {
	activeFilter: Filter.characters,
	[Filter.characters]: {
		...initialFilterState,
		filterQuery: queries.characters,
	},
	[Filter.locations]: {
		...initialFilterState,
		filterQuery: queries.locations,
	},
	[Filter.episodes]: {
		...initialFilterState,
		filterQuery: queries.episodes,
	},
};

// REDUCER
const reducer: Reducer<SearcherState> = (state = initialData, action) => {
	switch (action.type) {
		case SET_FILTER:
		case SET_NAME:
		case SET_TYPE:
		case CLEAR_INPUT:
		case CLEAR_COLLECTION:
		case CLEAR_ERROR:
		case SET_TOTAL_PAGES:
		case SET_CURRENT_PAGE:
		case GET_COLLECTION_PENDING:
		case GET_COLLECTION_SUCCESS:
		case GET_COLLECTION_ERROR:
			return { ...state, ...action.payload };
		default:
			return action;
	}
};

// ACTIONS
export const setFilterAction: AppThunk = (filter: Filter) => (
	dispatch,
	getState
) => {
	dispatch({
		type: SET_FILTER,
		payload: {
			activeFilter: filter,
			[filter]: {
				...getState().searcher[filter],
				filterQuery: queries[filter],
			},
		},
	});
};

export const setInputNameAction: AppThunk = (inputName: string) => (
	dispatch,
	getState
) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: SET_NAME,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				inputName,
			},
		},
	});
};

export const setInputTypeAction: AppThunk = (inputType: string) => (
	dispatch,
	getState
) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: SET_TYPE,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				inputType,
			},
		},
	});
};

export const clearInputAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: CLEAR_INPUT,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				inputName: "",
				inputType: "",
			},
		},
	});
};

export const clearCollectionAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: CLEAR_COLLECTION,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				collection: [],
			},
		},
	});

	dispatch(clearErrorAction());
};

export const clearErrorAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: CLEAR_ERROR,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				error: false,
				fetching: false,
			},
		},
	});
};

export const setPageAction: AppThunk = (page: number) => (
	dispatch,
	getState
) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: SET_CURRENT_PAGE,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				page,
			},
		},
	});
};

export const setTotalPagesAction: AppThunk = (pages: number) => (
	dispatch,
	getState
) => {
	const { activeFilter } = getState().searcher;
	const activeFilterState = getState().searcher[activeFilter];
	dispatch({
		type: SET_TOTAL_PAGES,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				fetching: false,
				totalPages: pages,
			},
		},
	});
};

export const getCollectionAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	const { filterQuery, page, inputName, inputType } = getState().searcher[
		activeFilter
	];
	const activeFilterState = getState().searcher[activeFilter];

	const query = gql`
		${filterQuery}
	`;

	dispatch({
		type: GET_COLLECTION_PENDING,
		payload: {
			[activeFilter]: {
				...activeFilterState,
				fetching: true,
			},
		},
	});

	return client
		.query({
			query,
			variables: {
				name: inputName ? inputName.toLowerCase() : "",
				type: inputType ? inputType.toLowerCase() : "",
				page: page ? page : 1,
			},
		})
		.then(({ data }) => {
			dispatch({
				type: GET_COLLECTION_SUCCESS,
				payload: {
					[activeFilter]: {
						...activeFilterState,
						fetching: false,
						collection: data[activeFilter!].results,
					},
				},
			});
			dispatch(setTotalPagesAction(data[activeFilter!].info.pages));
		})
		.catch((error) => {
			dispatch({
				type: GET_COLLECTION_ERROR,
				payload: {
					[activeFilter]: {
						...activeFilterState,
						error: true,
					},
				},
			});
		});
};

export default reducer;
