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
var react_1 = __importStar(require("react"));
var InputField_1 = __importDefault(require("../inputField/InputField"));
var ButtonAction_1 = __importDefault(require("../buttonAction/ButtonAction"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var ClearRounded_1 = __importDefault(require("@material-ui/icons/ClearRounded"));
var react_redux_1 = require("react-redux");
var searcherDuck_1 = require("../../redux/searcherDuck");
require("./SearchForm.css");
var SearchForm = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.tipo, tipo = _c === void 0 ? '' : _c, filter = _a.filter, setInputNameAction = _a.setInputNameAction, setInputTypeAction = _a.setInputTypeAction, limpiarInputAction = _a.limpiarInputAction, limpiarCollectionAction = _a.limpiarCollectionAction, getCollectionAction = _a.getCollectionAction;
    // Desabilitar el boton de buscar si hay menos de 3 caracteres 
    var _d = react_1.useState(false), disable = _d[0], setDisable = _d[1];
    react_1.useEffect(function () {
        if (!name && !tipo) {
            setDisable(false);
            return;
        }
        setDisable(name.length > 2 || tipo.length > 2);
    }, [name, tipo]);
    // dispatchers
    var setName = function (event) { setInputNameAction(event.target.value); };
    var setType = function (event) { setInputTypeAction(event.target.value); };
    var getCollection = function (event) {
        event.preventDefault();
        getCollectionAction();
    };
    var clearInput = function (event) {
        event.preventDefault();
        limpiarInputAction();
        limpiarCollectionAction();
    };
    return (<div className="searchForm">
            <form className='searchForm__form'>
                <InputField_1.default label="Search by name" value={name} handleChange={setName}/>

                <InputField_1.default label="Search by type" value={tipo} handleChange={setType} disabled={filter === 'episodes'}/>
                
                <ButtonAction_1.default disabled={!disable} type='submit' handleClick={getCollection}>
                    <Search_1.default />
                </ButtonAction_1.default>

                <ButtonAction_1.default handleClick={clearInput}>
                    <ClearRounded_1.default />
                </ButtonAction_1.default>
            </form>
        </div>);
};
var mapStateToProps = function (state) { return ({
    name: state.searcher.name,
    tipo: state.searcher.tipo,
    filter: state.searcher.filter
}); };
exports.default = react_redux_1.connect(mapStateToProps, { setInputNameAction: searcherDuck_1.setInputNameAction, setInputTypeAction: searcherDuck_1.setInputTypeAction, limpiarInputAction: searcherDuck_1.limpiarInputAction, limpiarCollectionAction: searcherDuck_1.limpiarCollectionAction, getCollectionAction: searcherDuck_1.getCollectionAction })(SearchForm);
