import { gql } from "apollo-boost";
import { client, queries } from "../../services/apollo";
import {
	AppThunk,
	CLEAR_COLLECTION,
	CLEAR_ERROR,
	CLEAR_INPUT,
	Filter,
	GET_COLLECTION_ERROR,
	GET_COLLECTION_PENDING,
	GET_COLLECTION_SUCCESS,
	SET_CURRENT_PAGE,
	SET_FILTER,
	SET_NAME,
	SET_TOTAL_PAGES,
	SET_TYPE,
} from "./searcher.types";

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
	dispatch({
		type: SET_NAME,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
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
	dispatch({
		type: SET_TYPE,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
				inputType,
			},
		},
	});
};

export const clearInputAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	dispatch({
		type: CLEAR_INPUT,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
				inputName: "",
				inputType: "",
			},
		},
	});
};

export const clearCollectionAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	dispatch({
		type: CLEAR_COLLECTION,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
				collection: [],
			},
		},
	});

	dispatch(clearErrorAction());
};

export const clearErrorAction: AppThunk = () => (dispatch, getState) => {
	const { activeFilter } = getState().searcher;
	dispatch({
		type: CLEAR_ERROR,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
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
	dispatch({
		type: SET_CURRENT_PAGE,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
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
	dispatch({
		type: SET_TOTAL_PAGES,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
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

	const query = gql`
		${filterQuery}
	`;

	dispatch({
		type: GET_COLLECTION_PENDING,
		payload: {
			[activeFilter]: {
				...getState().searcher[activeFilter],
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
				page: page || 1,
			},
		})
		.then(({ data }) => {
			dispatch({
				type: GET_COLLECTION_SUCCESS,
				payload: {
					[activeFilter]: {
						...getState().searcher[activeFilter],
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
						...getState().searcher[activeFilter],
						error: true,
						fetching: false,
					},
				},
			});
		});
};
