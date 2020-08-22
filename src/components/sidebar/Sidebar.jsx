import React from 'react';
import logo from '../../assets/RickAndMorty.png';
import FaceIcon from '@material-ui/icons/Face';
import RoomIcon from '@material-ui/icons/Room';
import MovieIcon from '@material-ui/icons/Movie';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { setFilterCharactersAction,
         setFilterLocationsAction,
         setFilterEpisodesAction } from '../../redux/searcherDuck';
import { connect } from 'react-redux';
import './Sidebar.css';

const Sidebar = ({ filter='characters', setFilterCharactersAction, setFilterLocationsAction, setFilterEpisodesAction }) => {
    
    function handleChange(event,newValue) {
        switch(newValue) {
            case 'characters':
                setFilterCharactersAction()
                return
            case 'locations':
                setFilterLocationsAction()
                return
            case 'episodes':
                setFilterEpisodesAction()
                return
            default:
                return
        }
    }

    return (
        <div className="sidebar">
            <img className='sidebar__logo' src={logo} alt="logo" />
            <p className="sidebar__title">Filters</p>
            <hr/>
            <BottomNavigation className="sidebar__nav" value={filter} onChange={handleChange} showLabels>
                <BottomNavigationAction label="Characters" value="characters" icon={<FaceIcon className="sidebarnav__icon"/>}  className="sidebarnav__button" />
                <BottomNavigationAction label="Locations" value="locations" icon={<RoomIcon className="sidebarnav__icon"/>} className="sidebarnav__button"/>
                <BottomNavigationAction label="Episodes" value="episodes" icon={<MovieIcon className="sidebarnav__icon"/>} className="sidebarnav__button"/>
            </BottomNavigation>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        filter: state.searcher.filter
    }
}

export default connect(mapStateToProps, { setFilterCharactersAction,
                               setFilterLocationsAction,
                               setFilterEpisodesAction })(Sidebar); 