import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { setInputNameAction, setInputTypeAction, limpiarInputAction, getCollectionAction } from '../../redux/searchboxDuck';
import './SearchForm.css';

const SearchForm = ({ name='', tipo='', filter,
                    setInputNameAction, setInputTypeAction, limpiarInputAction, getCollectionAction }) => {
    
    const [disable, setDisable] = useState(false)

    const theme = createMuiTheme({
        palette: { 
          primary: {
            main: '#7aaaaa',
          }
        },
      });

    const setName = (event) => { setInputNameAction(event.target.value) }

    const setType = (event) => { setInputTypeAction(event.target.value) }

    const getCollection = (event) => { 
        event.preventDefault()
        getCollectionAction() 
    } 

    const clearInput = (event) => { 
        event.preventDefault()
        limpiarInputAction() 
    }


    // Desabilitar el boton de buscar si hay menos de 3 caracteres 
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
                    
                    <IconButton
                    variant='contained' 
                    color='primary' 
                    className="searchForm__clearButton"
                    onClick={clearInput}
                    >
                        <ClearRoundedIcon />
                    </IconButton>

                    <TextField 
                        onChange={setName}  
                        label="Search by name" 
                        value={name}
                        className='searchForm__input' 
                        id="outlined-basic" 
                        variant="outlined" 
                        size="small" 
                        color='primary'/>

                    <TextField 
                        onChange={setType} 
                        label="Search by type" 
                        value={tipo}
                        className='searchForm__input' 
                        disabled={filter==='episodes'}
                        id="outlined-basic"  variant="outlined" size="small" color='primary'/>

                    <IconButton
                        disabled={!disable}
                        variant='contained' 
                        color='primary' 
                        type='submit'
                        className="searchForm__iconButton"
                        onClick={getCollection}
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
    tipo: state.searchbox.tipo,
    filter: state.searchbox.filter
})

export default connect(mapStateToProps,{ setInputNameAction, setInputTypeAction, limpiarInputAction, getCollectionAction })(SearchForm);