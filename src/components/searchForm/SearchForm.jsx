import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './SearchForm.css';

const SearchForm = ({ handleChangeName, handleChangeType, disable }) => {
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#0088cc',
          }
        },
      });

    return (
        <div className="searchForm">
            <form className='searchForm__form'>
                <ThemeProvider theme={theme}>
                    <TextField className='searchForm__input' id="outlined-basic" label="Search by name" variant="outlined" onChange={handleChangeName} size="small" color='primary'/>
                    <TextField className='searchForm__input' id="outlined-basic" label="Search by type" variant="outlined" onChange={handleChangeType} size="small" color='primary'/>

                    <IconButton
                    disabled={!disable}
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    className="app__iconButton"
                    >
                        <SearchIcon/>
                    </IconButton>
                </ThemeProvider>
                    
            </form>
        </div>
    );
};

export default SearchForm;