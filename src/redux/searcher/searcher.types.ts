import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../root-reducer";

export enum Filter {
	characters = "characters",
	locations = "locations",
	episodes = "episodes",
}

export interface Characters {
	id?: number;
	name: string;
	type?: string;
	species?: string;
	gender?: string;
	image: string;
}

export interface Locations {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: { name: string; image: string }[];
}

export interface Episodes {
	id: number;
	name: string;
	air_date: Date;
	episode: string;
	characters: { name: string; image: string }[];
}

export type Data = Characters | Locations | Episodes;

export interface FilterState {
	filterQuery?: string;
	collection?: Data[];
	inputType: string;
	inputName: string;
	fetching?: boolean;
	error?: boolean;
	page?: number;
	totalPages?: number;
}

export interface SearcherState {
	activeFilter: Filter;
	[Filter.characters]: FilterState;
	[Filter.locations]: FilterState;
	[Filter.episodes]: FilterState;
}

// CONSTANTS
export const SET_FILTER = "SET_FILTER";
export const SET_NAME = "SET_NAME";
export const SET_TYPE = "SET_TYPE";
export const CLEAR_INPUT = "CLEAR_INPUT";
export const CLEAR_COLLECTION = "CLEAR_COLLECTION";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const GET_COLLECTION_PENDING = "GET_COLLECTION_PENDING";
export const GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
export const GET_COLLECTION_ERROR = "GET_COLLECTION_ERROR";

// ACTIONS TYPE
interface SetFilterAction {
	type: typeof SET_FILTER;
	payload: FilterState;
}

interface SetInputAction {
	type: typeof SET_NAME | typeof SET_TYPE;
	payload: FilterState;
}

interface ClearStateAction {
	type: typeof CLEAR_INPUT | typeof CLEAR_COLLECTION | typeof CLEAR_ERROR;
	payload: FilterState;
}

interface PaginatorAction {
	type: typeof SET_TOTAL_PAGES | typeof SET_CURRENT_PAGE;
	payload: FilterState;
}

interface GetDataActionSuccess {
	type: typeof GET_COLLECTION_SUCCESS;
	payload: FilterState;
}

interface GetDataActionPendingOrError {
	type: typeof GET_COLLECTION_PENDING | typeof GET_COLLECTION_ERROR;
	payload: FilterState;
}

export type SearcherActionTypes =
	| SetFilterAction
	| SetInputAction
	| ClearStateAction
	| PaginatorAction
	| GetDataActionSuccess
	| GetDataActionPendingOrError;

export type AppThunk = ActionCreator<
	ThunkAction<void, RootState, null, Action<string>>
>;
