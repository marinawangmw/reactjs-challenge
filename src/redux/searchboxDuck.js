// import ApolloClient, { gql } from 'apollo-boost';
import { characters, locations, episodes } from '../data'; 

// estados
const initialData = {
    filterQuery: '', 
    collection: [],
    tipo: '',
    name: ''
}

// constantes
const SET_FILTER = 'SET_FILTER';
const SET_COLLECTION = 'SET_COLLECTION';
const SET_NAME = 'SET_NAME';
const SET_TYPE = 'SET_TYPE';
const LIMPIAR_INPUT = 'LIMPIAR_INPUT';

// Estados de get collection from api

// reducer
const reducer = ( state=initialData, action ) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload}
        case SET_TYPE:
            return { ...state, tipo: action.payload}
        
        case SET_FILTER:
            return {...state, filterQuery: action.payload}
        case SET_COLLECTION:
            return {...state, collection: action.payload}

        case LIMPIAR_INPUT:
            return {...state, tipo:'', name:'' }
            
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
    limpiarInputAction()(dispatch, getState);
    // DESPUES BORRAR
    getCollectionAction(characters) (dispatch, getState)
}

export const setFilterLocationsAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        // query locations
        payload: 'locations'
    })
    limpiarInputAction()(dispatch, getState);
    // DESPUES BORRAR
    getCollectionAction(locations) (dispatch, getState)
}

export const setFilterEpisodesAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        // query episodes
        payload: 'episodes'
    })
    limpiarInputAction()(dispatch, getState);
    // DESPUES BORRAR
    getCollectionAction(episodes) (dispatch, getState)
}

// cuando toca boton buscar
export const getCollectionAction = (item) => (dispatch, getState) => {
    //const { filterQuery } = getState().searchbox;
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

export const setInputTypeAction = (tipo) => (dispatch, getState) => {
    dispatch({
        type: SET_TYPE,
        payload: tipo
    })
} 

export const limpiarInputAction =() => (dispatch, getState) => {
    dispatch({
        type: LIMPIAR_INPUT
    })
}

export default reducer;