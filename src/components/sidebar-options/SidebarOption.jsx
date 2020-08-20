import React from 'react';
import Button from '@material-ui/core/Button'
import './SidebarOption.css';

const SidebarOption = ({ children, handleClick }) => {
    return (
        <div className="sidebarOption">
            <Button className="sidebarOption__botton" onClick={handleClick}>
                {children.toUpperCase()}
            </Button>
        </div>
    );
};

export default SidebarOption;