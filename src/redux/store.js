import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { setFilterCharactersAction } from './searchboxDuck';
import thunk from 'redux-thunk';
import searchboxReducer from './searchboxDuck';

const rootReducer = combineReducers({
    searchbox: searchboxReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    
    setFilterCharactersAction()(store.dispatch)
    return store
}
