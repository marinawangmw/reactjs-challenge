"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RickAndMorty_png_1 = __importDefault(require("../../assets/RickAndMorty.png"));
var Face_1 = __importDefault(require("@material-ui/icons/Face"));
var Room_1 = __importDefault(require("@material-ui/icons/Room"));
var Movie_1 = __importDefault(require("@material-ui/icons/Movie"));
var BottomNavigation_1 = __importDefault(require("@material-ui/core/BottomNavigation"));
var BottomNavigationAction_1 = __importDefault(require("@material-ui/core/BottomNavigationAction"));
var searcherDuck_1 = require("../../redux/searcherDuck");
var react_redux_1 = require("react-redux");
require("./Sidebar.css");
var Sidebar = function (_a) {
    var _b = _a.filter, filter = _b === void 0 ? 'characters' : _b, setFilterCharactersAction = _a.setFilterCharactersAction, setFilterLocationsAction = _a.setFilterLocationsAction, setFilterEpisodesAction = _a.setFilterEpisodesAction;
    function handleChange(event, newValue) {
        switch (newValue) {
            case 'characters':
                setFilterCharactersAction();
                return;
            case 'locations':
                setFilterLocationsAction();
                return;
            case 'episodes':
                setFilterEpisodesAction();
                return;
            default:
                return;
        }
    }
    return (<div className="sidebar">
            <img className='sidebar__logo' src={RickAndMorty_png_1.default} alt="logo"/>
            <p className="sidebar__title">Filters</p>
            <hr />
            <BottomNavigation_1.default className="sidebar__nav" value={filter} onChange={handleChange} showLabels>
                <BottomNavigationAction_1.default label="Characters" value="characters" icon={<Face_1.default className="sidebarnav__icon"/>} className="sidebarnav__button"/>
                <BottomNavigationAction_1.default label="Locations" value="locations" icon={<Room_1.default className="sidebarnav__icon"/>} className="sidebarnav__button"/>
                <BottomNavigationAction_1.default label="Episodes" value="episodes" icon={<Movie_1.default className="sidebarnav__icon"/>} className="sidebarnav__button"/>
            </BottomNavigation_1.default>

        </div>);
};
function mapStateToProps(state) {
    return {
        filter: state.searcher.filter
    };
}
exports.default = react_redux_1.connect(mapStateToProps, { setFilterCharactersAction: searcherDuck_1.setFilterCharactersAction,
    setFilterLocationsAction: searcherDuck_1.setFilterLocationsAction,
    setFilterEpisodesAction: searcherDuck_1.setFilterEpisodesAction })(Sidebar);
