import React from 'react';
import SidebarOption from '../sidebar-options/SidebarOption';
import logo from '../../assets/RickAndMorty.png';
import { setFilterCharactersAction,
         setFilterLocationsAction,
         setFilterEpisodesAction } from '../../redux/searchboxDuck';
import { connect } from 'react-redux';
import './Sidebar.css'

const Sidebar = ({ setFilterCharactersAction, setFilterLocationsAction, setFilterEpisodesAction }) => {
    
    function filterCharacters() {
        setFilterCharactersAction()
    }

    function filterLocations() {
        setFilterLocationsAction()
    }

    function filterEpisodes() {
        setFilterEpisodesAction()
    }

    return (
        <div className="sidebar">
            <img className='sidebar__logo' src={logo} alt="logo" />
            <p className="sidebar__title">Filters</p>
            <hr/>
            <SidebarOption handleClick={filterCharacters}>Characters</SidebarOption>
            <SidebarOption handleClick={filterLocations}>Locations</SidebarOption>
            <SidebarOption handleClick={filterEpisodes}>Episodes</SidebarOption>
        </div>
    );
};

export default connect(null, { setFilterCharactersAction,
                               setFilterLocationsAction,
                               setFilterEpisodesAction })(Sidebar); 