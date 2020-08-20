// import ApolloClient, { gql } from 'apollo-boost';
import { characters, locations, episodes } from '../data'; 

// estados
const initialData = {
    filterQuery: '',
    collection: [],
    type: '',
    name: ''
}

// constantes
const SET_FILTER = 'SET_FILTER';
const SET_COLLECTION = 'SET_COLLECTION';
const SET_NAME = 'SET_NAME';
const SET_TYPE = 'SET_TYPE';

// Estados de get collection from api

// reducer
const reducer = ( state=initialData, action ) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload}
        case SET_TYPE:
            return { ...state, type: action.payload}
        
        case SET_FILTER:
            return {...state, filterQuery: action.payload}
        case SET_COLLECTION:
            return {...state, collection: action.payload}
        default:
            return action
    }
}

// actions
// cuando selecciona filter
export const setFilterCharactersAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        // query character
        payload: 'characters'
    })
    // DESPUES BORRAR
    getCollectionAction(characters) (dispatch, getState)
}

export const setFilterLocationsAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        // query locations
        payload: 'locations'
    })
    // DESPUES BORRAR
    getCollectionAction(locations) (dispatch, getState)
}

export const setFilterEpisodesAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        // query episodes
        payload: 'episodes'
    })
    // DESPUES BORRAR
    getCollectionAction(episodes) (dispatch, getState)
}

// cuando toca boton buscar
export const getCollectionAction = (item) => (dispatch, getState) => {
    const { filterQuery } = getState().searchbox;
    // manda la query a la api y obtiene los datos
    const items = item.results
    dispatch({
        type: SET_COLLECTION,
        // payload: data.characters.results
        payload: [...items]
    })
    
}

export const setInputNameAction = (name) => (dispatch, getState) => {
    dispatch({
        type: SET_NAME,
        payload: name
    })
} 

export const setInputTypeAction = (type) => (dispatch, getState) => {
    dispatch({
        type: SET_TYPE,
        payload: type
    })
} 

export default reducer;