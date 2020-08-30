import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searcherReducer from './searcherDuck';

const rootReducer = combineReducers({
    searcher: searcherReducer
}) 

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    
    return store
}

export type RootState = ReturnType<typeof rootReducer>;