import React from 'react';
import './InputField.css'

import { theme } from '../../material-ui-theme';
import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const InputField = ({ label, handleChange, value, ...otherProps}) => {

    return (
        <div className='inputField'>
        <ThemeProvider theme={theme}>
            <TextField 
                onChange={handleChange}  
                label={label}
                value={value}
                id="outlined-basic" 
                variant="outlined" 
                size="small" 
                color='primary'
                {...otherProps}/>
        </ThemeProvider>
        </div>
    );
};

export default InputField;