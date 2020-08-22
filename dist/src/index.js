"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./App"));
var store_1 = __importDefault(require("./redux/store"));
var react_redux_1 = require("react-redux");
var apollo_boost_1 = __importDefault(require("apollo-boost"));
var react_apollo_1 = require("react-apollo");
var serviceWorker = __importStar(require("./serviceWorker"));
require("./index.css");
var store = store_1.default();
var client = new apollo_boost_1.default({
    uri: "https://rickandmortyapi.com/graphql/"
});
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_apollo_1.ApolloProvider client={client}>
      <react_redux_1.Provider store={store}>
        <App_1.default />
      </react_redux_1.Provider>
    </react_apollo_1.ApolloProvider>
  </react_1.default.StrictMode>, document.getElementById('root'));
serviceWorker.unregister();
