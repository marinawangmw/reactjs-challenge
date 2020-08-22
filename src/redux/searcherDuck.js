import ApolloClient, { gql } from 'apollo-boost';

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

// ESTADOS
const initialData = {
    filterQuery: '',
    filter:'', 
    collection: [],
    tipo: '',
    name: '',
    fetching: false,
    page: 1,
    totalPages: 0,
    error:''
}

// CONSTANTES
const SET_FILTER = 'SET_FILTER';
const SET_NAME = 'SET_NAME';
const SET_TYPE = 'SET_TYPE';
const LIMPIAR_INPUT = 'LIMPIAR_INPUT';
const LIMPIAR_COLLECTION = 'LIMPIAR_COLLECTION';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const LIMPIAR_ERROR = 'LIMPIAR_ERROR';

// constantes de estados de get collection from api
const GET_COLLECTION_PENDING = "GET_COLLECTION_PENDING";
const GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
const GET_COLLECTION_ERROR = "GET_COLLECTION_ERROR";

// REDUCER
const reducer = ( state=initialData, action ) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload}
        case SET_TYPE:
            return { ...state, tipo: action.payload}
        
        case SET_FILTER:
            return {...state, ...action.payload }
        case LIMPIAR_INPUT:
            return {...state, tipo:'', name:''}
        case LIMPIAR_COLLECTION:
            return {...state, collection:[], totalPages:0, page:1 }
        case SET_TOTAL_PAGES:
            return {...state, totalPages: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        case LIMPIAR_ERROR:
            return {...state, error:''}

        case GET_COLLECTION_PENDING:
            return {...state, fetching: true}
        case GET_COLLECTION_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_COLLECTION_SUCCESS:
            return { ...state, fetching: false, collection: action.payload }

            
        default:
            return action
    }
}

// ACTIONS
// cuando selecciona filter
export const setFilterCharactersAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        payload: { filter: 'characters', filterQuery: `query($name:String,$type:String, $page:Int) {
            characters(page:$page,filter:{name:$name, type:$type}){
             info{
               pages
               next
               prev
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
         }`}
    })
    limpiarInputAction()(dispatch, getState);
    limpiarCollectionAction()(dispatch, getState);
}

export const setFilterLocationsAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        payload: { filter: 'locations', filterQuery: `
            query($name:String,$type:String, $page:Int) {
                locations(page:$page,filter:{name:$name, type:$type}){
                    info{
                        pages
                        next
                        prev
                    }
                    results{
                        id
                        name
                        dimension
                        created
                        residents{
                            name
                            image
                        }
                    }
                }
            }
        `}
    })
    limpiarInputAction()(dispatch, getState);
    limpiarCollectionAction()(dispatch, getState);
}

export const setFilterEpisodesAction = () => (dispatch, getState) => {
    dispatch({
        type: SET_FILTER,
        payload: { filter: 'episodes', filterQuery: `query($name:String, $page:Int) {
            episodes(page:$page,filter:{name:$name}){
              info{
                pages
                next
                prev
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
                created
              }
            }
          }
        `}
    })
    limpiarInputAction()(dispatch, getState);
    limpiarCollectionAction()(dispatch, getState);
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

export const limpiarInputAction = () => (dispatch, getState) => {
    dispatch({
        type: LIMPIAR_INPUT
    })
    limpiarErrorAction()(dispatch, getState);
}

export const limpiarCollectionAction = () => (dispatch, getState) => {
    dispatch({
        type: LIMPIAR_COLLECTION
    })
    limpiarErrorAction()(dispatch, getState);
}

export const limpiarErrorAction = () => (dispatch, getState) => {
    dispatch({
        type: LIMPIAR_ERROR
    })
}

export const setPageAction = (page) => (dispatch, getState) => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: page
    })
    getCollectionAction()(dispatch, getState)
}

// cuando toca boton buscar
export const getCollectionAction = () => (dispatch, getState) => {
    const { filterQuery, filter, page, name, tipo } = getState().searcher;
    limpiarCollectionAction()(dispatch, getState)
    // manda la query a la api y obtiene los datos
    const query = gql`${filterQuery}`

    dispatch({
        type: GET_COLLECTION_PENDING,
    })

    return client.query({
        query,
        variables: { name:name.toLowerCase(), type:tipo.toLowerCase(), page:page }
    })
        .then(({ data,error }) => {
            if(error){
                dispatch({
                    type: GET_COLLECTION_ERROR,
                    payload: error
                })
                return
            }
            dispatch({
                type: GET_COLLECTION_SUCCESS,
                payload: data[filter].results
            })

            dispatch({
                type: SET_TOTAL_PAGES,
                payload: data[filter].info.pages
            })

        }).catch(error => {
            dispatch({
                type: GET_COLLECTION_ERROR,
                payload: error
            })
        })
    
}

export default reducer;