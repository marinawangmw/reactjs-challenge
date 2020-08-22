"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var searcherDuck_1 = require("./searcherDuck");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var searcherDuck_2 = __importDefault(require("./searcherDuck"));
var rootReducer = redux_1.combineReducers({
    searcher: searcherDuck_2.default
});
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
function generateStore() {
    var store = redux_1.createStore(rootReducer, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
    searcherDuck_1.setFilterCharactersAction()(store.dispatch);
    return store;
}
exports.default = generateStore;
