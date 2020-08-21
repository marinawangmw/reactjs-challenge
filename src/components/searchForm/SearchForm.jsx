import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { setInputNameAction, setInputTypeAction } from '../../redux/searchboxDuck';
import './SearchForm.css';

const SearchForm = ({ name='', tipo='', setInputNameAction, setInputTypeAction }) => {
    
    const [disable, setDisable] = useState(false)

    const theme = createMuiTheme({
        palette: { 
          primary: {
            main: '#0088cc',
          }
        },
      });

    const setName = (event) => { setInputNameAction(event.target.value) }

    const setType = (event) => { setInputTypeAction(event.target.value) }

    useEffect(() => {
        if(!name && !tipo){
            setDisable(false)
            return
        }
        setDisable(name.length >2 || tipo.length > 2)

    },[name,tipo])

    return (
        <div className="searchForm">
            <form className='searchForm__form'>
                <ThemeProvider theme={theme}>
                    <TextField className='searchForm__input' onChange={setName} value={name} id="outlined-basic" label="Search by name" variant="outlined" size="small" color='primary'/>
                    <TextField className='searchForm__input' onChange={setType} value={tipo} id="outlined-basic" label="Search by type" variant="outlined" size="small" color='primary'/>

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

const mapStateToProps = (state) => ({
    name: state.searchbox.name,
    tipo: state.searchbox.tipo
})

export default connect(mapStateToProps,{ setInputNameAction, setInputTypeAction })(SearchForm);