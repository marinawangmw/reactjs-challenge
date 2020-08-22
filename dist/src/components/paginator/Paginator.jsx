"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Pagination_1 = __importDefault(require("@material-ui/lab/Pagination"));
var searcherDuck_1 = require("../../redux/searcherDuck");
var react_redux_1 = require("react-redux");
var Paginator = function (_a) {
    var pages = _a.pages, setPageAction = _a.setPageAction;
    var handleChangePage = function (event, value) {
        setPageAction(value);
    };
    return (<div className='paginator'>
            <Pagination_1.default count={pages} shape="rounded" size="large" onChange={handleChangePage}/>
        </div>);
};
function mapStateToProps(state) {
    return {
        pages: state.searcher.totalPages
    };
}
exports.default = react_redux_1.connect(mapStateToProps, { setPageAction: searcherDuck_1.setPageAction })(Paginator);
