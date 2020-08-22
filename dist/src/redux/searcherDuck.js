"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionAction = exports.setPageAction = exports.limpiarErrorAction = exports.limpiarCollectionAction = exports.limpiarInputAction = exports.setInputTypeAction = exports.setInputNameAction = exports.setFilterEpisodesAction = exports.setFilterLocationsAction = exports.setFilterCharactersAction = void 0;
var apollo_boost_1 = __importStar(require("apollo-boost"));
var client = new apollo_boost_1.default({
    uri: "https://rickandmortyapi.com/graphql"
});
// ESTADOS
var initialData = {
    filterQuery: '',
    filter: '',
    collection: [],
    tipo: '',
    name: '',
    fetching: false,
    page: 1,
    totalPages: 0,
    error: ''
};
// CONSTANTES
var SET_FILTER = 'SET_FILTER';
var SET_NAME = 'SET_NAME';
var SET_TYPE = 'SET_TYPE';
var LIMPIAR_INPUT = 'LIMPIAR_INPUT';
var LIMPIAR_COLLECTION = 'LIMPIAR_COLLECTION';
var SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var LIMPIAR_ERROR = 'LIMPIAR_ERROR';
// constantes de estados de get collection from api
var GET_COLLECTION_PENDING = "GET_COLLECTION_PENDING";
var GET_COLLECTION_SUCCESS = "GET_COLLECTION_SUCCESS";
var GET_COLLECTION_ERROR = "GET_COLLECTION_ERROR";
// REDUCER
var reducer = function (state, action) {
    if (state === void 0) { state = initialData; }
    switch (action.type) {
        case SET_NAME:
            return __assign(__assign({}, state), { name: action.payload });
        case SET_TYPE:
            return __assign(__assign({}, state), { tipo: action.payload });
        case SET_FILTER:
            return __assign(__assign({}, state), action.payload);
        case LIMPIAR_INPUT:
            return __assign(__assign({}, state), { tipo: '', name: '' });
        case LIMPIAR_COLLECTION:
            return __assign(__assign({}, state), { collection: [], totalPages: 0, page: 1 });
        case SET_TOTAL_PAGES:
            return __assign(__assign({}, state), { totalPages: action.payload });
        case SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { page: action.payload });
        case LIMPIAR_ERROR:
            return __assign(__assign({}, state), { error: '' });
        case GET_COLLECTION_PENDING:
            return __assign(__assign({}, state), { fetching: true });
        case GET_COLLECTION_ERROR:
            return __assign(__assign({}, state), { fetching: false, error: action.payload });
        case GET_COLLECTION_SUCCESS:
            return __assign(__assign({}, state), { fetching: false, collection: action.payload });
        default:
            return action;
    }
};
// ACTIONS
// cuando selecciona filter
exports.setFilterCharactersAction = function () { return function (dispatch, getState) {
    dispatch({
        type: SET_FILTER,
        payload: { filter: 'characters', filterQuery: "query($name:String,$type:String, $page:Int) {\n            characters(page:$page,filter:{name:$name, type:$type}){\n             info{\n               pages\n               next\n               prev\n             }\n             results{\n               id\n               name\n               type\n               species\n               gender\n               image\n             }\n           }\n         }" }
    });
    exports.limpiarInputAction()(dispatch, getState);
    exports.limpiarCollectionAction()(dispatch, getState);
}; };
exports.setFilterLocationsAction = function () { return function (dispatch, getState) {
    dispatch({
        type: SET_FILTER,
        payload: { filter: 'locations', filterQuery: "\n            query($name:String,$type:String, $page:Int) {\n                locations(page:$page,filter:{name:$name, type:$type}){\n                    info{\n                        pages\n                        next\n                        prev\n                    }\n                    results{\n                        id\n                        name\n                        dimension\n                        created\n                        residents{\n                            name\n                            image\n                        }\n                    }\n                }\n            }\n        " }
    });
    exports.limpiarInputAction()(dispatch, getState);
    exports.limpiarCollectionAction()(dispatch, getState);
}; };
exports.setFilterEpisodesAction = function () { return function (dispatch, getState) {
    dispatch({
        type: SET_FILTER,
        payload: { filter: 'episodes', filterQuery: "query($name:String, $page:Int) {\n            episodes(page:$page,filter:{name:$name}){\n              info{\n                pages\n                next\n                prev\n              }\n              results{\n                id\n                name\n                air_date\n                episode\n                characters{\n                  name\n                  image\n                }\n                created\n              }\n            }\n          }\n        " }
    });
    exports.limpiarInputAction()(dispatch, getState);
    exports.limpiarCollectionAction()(dispatch, getState);
}; };
exports.setInputNameAction = function (name) { return function (dispatch, getState) {
    dispatch({
        type: SET_NAME,
        payload: name
    });
}; };
exports.setInputTypeAction = function (tipo) { return function (dispatch, getState) {
    dispatch({
        type: SET_TYPE,
        payload: tipo
    });
}; };
exports.limpiarInputAction = function () { return function (dispatch, getState) {
    dispatch({
        type: LIMPIAR_INPUT
    });
    exports.limpiarErrorAction()(dispatch, getState);
}; };
exports.limpiarCollectionAction = function () { return function (dispatch, getState) {
    dispatch({
        type: LIMPIAR_COLLECTION
    });
    exports.limpiarErrorAction()(dispatch, getState);
}; };
exports.limpiarErrorAction = function () { return function (dispatch, getState) {
    dispatch({
        type: LIMPIAR_ERROR
    });
}; };
exports.setPageAction = function (page) { return function (dispatch, getState) {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: page
    });
    exports.getCollectionAction()(dispatch, getState);
}; };
// cuando toca boton buscar
exports.getCollectionAction = function () { return function (dispatch, getState) {
    var _a = getState().searcher, filterQuery = _a.filterQuery, filter = _a.filter, page = _a.page, name = _a.name, tipo = _a.tipo;
    exports.limpiarCollectionAction()(dispatch, getState);
    // manda la query a la api y obtiene los datos
    var query = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), filterQuery);
    dispatch({
        type: GET_COLLECTION_PENDING,
    });
    return client.query({
        query: query,
        variables: { name: name.toLowerCase(), type: tipo.toLowerCase(), page: page }
    })
        .then(function (_a) {
        var data = _a.data, error = _a.error;
        if (error) {
            dispatch({
                type: GET_COLLECTION_ERROR,
                payload: error
            });
            return;
        }
        dispatch({
            type: GET_COLLECTION_SUCCESS,
            payload: data[filter].results
        });
        dispatch({
            type: SET_TOTAL_PAGES,
            payload: data[filter].info.pages
        });
    }).catch(function (error) {
        dispatch({
            type: GET_COLLECTION_ERROR,
            payload: error
        });
    });
}; };
exports.default = reducer;
var templateObject_1;
