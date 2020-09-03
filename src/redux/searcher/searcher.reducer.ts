import { Reducer } from "redux";
import { queries } from "../../services/apollo";
import {
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
} from "./searcher.types";

// Initial State
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

export default reducer;
