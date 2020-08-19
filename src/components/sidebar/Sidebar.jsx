import React from 'react';
import SidebarOption from '../sidebar-options/SidebarOption';
import logo from '../../assets/RickAndMorty.png';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className='sidebar__logo' src={logo} alt="logo" />
            {/* <hr/> */}
            <p className="sidebar__title">Filters</p>
            <hr/>
            <SidebarOption>Characters</SidebarOption>
            <SidebarOption>Locations</SidebarOption>
            <SidebarOption>Episodes</SidebarOption>
        </div>
    );
};

export default Sidebar;