import React from 'react';
import './ButtonAction.css';
import { theme } from '../../material-ui-theme';
import { ThemeProvider } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';

const ButtonAction = ({ children, handleClick, ...otherProps }) => {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <IconButton
                    variant='contained' 
                    color='primary' 
                    onClick={handleClick}
                    {...otherProps}
                >
                    {children}
                </IconButton>
            </ThemeProvider>
        </div>
    );
};

export default ButtonAction;