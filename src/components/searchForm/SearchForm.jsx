import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import './SearchForm.css';

const SearchForm = ({ handleChangeName, handleChangeType }) => {
    return (
        <div className="searchForm">
            <form className='searchForm__form'>
                
                <TextField className='searchForm__input' id="outlined-basic" label="Search by name" variant="outlined" onChange={handleChangeName}/>
                <TextField className='searchForm__input' id="outlined-basic" label="Search by type" variant="outlined" onChange={handleChangeType}/>

                <IconButton
                variant='contained' 
                color='primary' 
                type='submit'
                className="app__iconButton"
                >
                    <SearchIcon/>
                </IconButton>
                    
            </form>
        </div>
    );
};

export default SearchForm;