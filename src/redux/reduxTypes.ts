import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from './store';

// STATE TYPES
export enum Filter { 
    characters = 'characters', 
    locations = 'locations', 
    episodes = 'episodes' 
}

// result data got from api
export interface ResultData {
    id?: number;
    name: string;
    type?: string;
    species?: string;
    gender?: string;
    image?: string;
    dimension?: string;
    episode?: string;
    air_date?: Date;
    residents?: { name:string, image:string }[];
    characters?: { name:string, image:string }[];
}

export interface SearcherState {
    filterQuery?: string;
    filter?: Filter;
    collection?: ResultData[];
    inputType?: string;
    inputName?: string;
    fetching?: boolean;
    error?: boolean;
    page?: number;
    totalPages?: number;
}

// CONSTANTS
export const SET_FILTER = 'SET_FILTER';
export const SET_NAME = 'SET_NAME';
export const SET_TYPE = 'SET_TYPE';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const CLEAR_COLLECTION = 'CLEAR_COLLECTION';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const GET_COLLECTION_PENDING = "GET_COLLECTION_PENDING";
export const GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
export const GET_COLLECTION_ERROR = "GET_COLLECTION_ERROR";

// ACTIONS TYPE
interface SetFilterAction {
    type: typeof SET_FILTER
    payload: { filter: Filter, filterQuery: string }
}

interface SetInputAction {
    type: typeof SET_NAME | typeof SET_TYPE
    payload: string
}

interface ClearStateAction {
    type: typeof CLEAR_INPUT | typeof CLEAR_COLLECTION | typeof CLEAR_ERROR 
}

interface PaginatorAction {
    type: typeof SET_TOTAL_PAGES | typeof SET_CURRENT_PAGE
    payload: number
}

interface GetDataActionSuccess {
    type: typeof GET_COLLECTION_SUCCESS
    payload: ResultData[] 
}

interface GetDataActionWithIssue {
    type: typeof GET_COLLECTION_PENDING | typeof GET_COLLECTION_ERROR
    payload: boolean
}

export type SearcherActionTypes = SetFilterAction | SetInputAction | ClearStateAction | PaginatorAction | GetDataActionSuccess | GetDataActionWithIssue


export type AppThunk = ActionCreator<
    ThunkAction<void, RootState, null, Action<string>>
>;