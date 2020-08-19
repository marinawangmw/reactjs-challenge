import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({ children }) => {
    return (
        <div className="sidebarOption">
            <a className="sidebarOption__link">{children.toUpperCase()}</a>
        </div>
    );
};

export default SidebarOption;