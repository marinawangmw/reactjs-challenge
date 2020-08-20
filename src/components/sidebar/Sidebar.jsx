import React from 'react';
import SidebarOption from '../sidebar-options/SidebarOption';
import logo from '../../assets/RickAndMorty.png';
import './Sidebar.css'

const Sidebar = ({ handleSelectCharacter,handleSelectLocations, handleSelectEpisodes }) => {
    return (
        <div className="sidebar">
            <img className='sidebar__logo' src={logo} alt="logo" />
            <p className="sidebar__title">Filters</p>
            <hr/>
            <SidebarOption handleClick={handleSelectCharacter}>Characters</SidebarOption>
            <SidebarOption handleClick={handleSelectLocations}>Locations</SidebarOption>
            <SidebarOption handleClick={handleSelectEpisodes}>Episodes</SidebarOption>
        </div>
    );
};

export default Sidebar;