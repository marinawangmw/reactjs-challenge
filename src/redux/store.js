import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { setFilterCharactersAction } from './searcherDuck';
import thunk from 'redux-thunk';
import searcherReducer from './searcherDuck';

const rootReducer = combineReducers({
    searcher: searcherReducer
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
