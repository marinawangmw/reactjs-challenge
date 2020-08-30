import ApolloClient, { gql } from "apollo-boost";
import { Reducer } from "redux";
import {
  AppThunk,
  CLEAR_COLLECTION,
  CLEAR_ERROR,
  CLEAR_INPUT,
  Filter,
  GET_COLLECTION_ERROR,
  GET_COLLECTION_PENDING,
  GET_COLLECTION_SUCCESS,
  SearcherActionTypes,
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
const initialData = {
  filterQuery: "",
  filter: Filter.characters,
  collection: [],
  inputType: "",
  inputName: "",
  fetching: false,
  error: false,
  page: 1,
  totalPages: 0,
};

// REDUCER
const reducer: Reducer<SearcherState> = (
  state = initialData,
  action: SearcherActionTypes
) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, ...action.payload };
    case SET_NAME:
      return { ...state, inputName: action.payload };
    case SET_TYPE:
      return { ...state, inputType: action.payload };
    case CLEAR_INPUT:
      return { ...state, inputType: "", inputName: "" };
    case CLEAR_COLLECTION:
      return { ...state, collection: [], totalPages: 0 };
    case CLEAR_ERROR:
      return { ...state, error: false };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, page: action.payload };
    case GET_COLLECTION_PENDING:
      return { ...state, fetching: true };
    case GET_COLLECTION_SUCCESS:
      return { ...state, fetching: false, collection: action.payload };
    case GET_COLLECTION_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return action;
  }
};

// ACTIONS
export const setFilterAction: AppThunk = (filterType: Filter) => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    payload: {
      filter: filterType,
      filterQuery: queries[filterType as keyof typeof queries],
    },
  });

  dispatch(clearInputAction());

  dispatch(clearCollectionAction());

  dispatch(setPageAction(1));
};

export const setInputNameAction: AppThunk = (inputName: string) => (
  dispatch
) => {
  dispatch({
    type: SET_NAME,
    payload: inputName,
  });
};

export const setInputTypeAction: AppThunk = (inputType: string) => (
  dispatch
) => {
  dispatch({
    type: SET_TYPE,
    payload: inputType,
  });
};

export const clearInputAction: AppThunk = () => (dispatch) => {
  dispatch({
    type: CLEAR_INPUT,
  });
};

export const clearCollectionAction: AppThunk = () => (dispatch) => {
  dispatch({
    type: CLEAR_COLLECTION,
  });

  dispatch(clearErrorAction());
};

export const clearErrorAction: AppThunk = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

export const setPageAction: AppThunk = (page: number) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
};

export const getCollectionAction: AppThunk = () => (dispatch, getState) => {
  const {
    filterQuery,
    filter,
    page,
    inputName,
    inputType,
  } = getState().searcher;

  dispatch(clearCollectionAction());

  const query = gql`
    ${filterQuery}
  `;

  dispatch({
    type: GET_COLLECTION_PENDING,
  });

  return client
    .query({
      query,
      variables: {
        name: inputName!.toLowerCase(),
        type: inputType!.toLowerCase(),
        page: page,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_COLLECTION_SUCCESS,
        payload: data[filter!].results,
      });

      dispatch({
        type: SET_TOTAL_PAGES,
        payload: data[filter!].info.pages,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_COLLECTION_ERROR,
        payload: error,
      });
    });
};

export default reducer;
