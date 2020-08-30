import React, { ChangeEvent } from 'react';
import logo from '../../assets/RickAndMorty.png';
import FaceIcon from '@material-ui/icons/Face';
import RoomIcon from '@material-ui/icons/Room';
import MovieIcon from '@material-ui/icons/Movie';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { setFilterCharactersAction,
         setFilterLocationsAction,
         setFilterEpisodesAction } from '../../redux/searcherDuck';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.css';

const Sidebar = () => {
    const filter = useSelector(
        (state: RootState) => state.searcher.filter
    )
    
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<{}>, newValue: string) {
        switch(newValue) {
            case 'characters':
                dispatch(setFilterCharactersAction());
                return
            case 'locations':
                dispatch(setFilterLocationsAction());
                return
            case 'episodes':
                dispatch(setFilterEpisodesAction());
                return
            default:
                return
        }
    }

    function handleLogoClick() {
        dispatch(setFilterCharactersAction());
    }

    return (
        <div className="sidebar">
            <img className='sidebar__logo' src={logo} alt="logo" onClick={handleLogoClick}/>
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

export default Sidebar; 