"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SearchForm_1 = __importDefault(require("../searchForm/SearchForm"));
var Collection_1 = __importDefault(require("../collection/Collection"));
var Paginator_1 = __importDefault(require("../paginator/Paginator"));
var MessageCard_1 = __importDefault(require("../messageCard/MessageCard"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var react_redux_1 = require("react-redux");
require("./Body.css");
var Body = function (_a) {
    var collection = _a.collection, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.fetching, fetching = _c === void 0 ? false : _c;
    return (<div className="body">

        <div className="body__header">
            <SearchForm_1.default />
        </div> 

        <div className="body__container">
            {fetching || error ?
        <MessageCard_1.default message={fetching ? fetching : error}>
                      {fetching ?
            <CircularProgress_1.default className="body__progress"/>
            : 'No data found...'}
                    </MessageCard_1.default>
        : // le paso la coleccion pq puede ser llamada desde otro lado
            <Collection_1.default collection={collection}/>}
        </div>

        <div className="body__pagination">
            <Paginator_1.default />
        </div>
    </div>);
};
function mapStateToProps(state) {
    return {
        collection: state.searcher.collection,
        error: state.searcher.error,
        fetching: state.searcher.fetching
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Body);
