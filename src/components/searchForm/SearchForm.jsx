import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { setInputNameAction, setInputTypeAction } from '../../redux/searchboxDuck';
import './SearchForm.css';

const SearchForm = ({ name = null, type = null }) => {
    const theme = createMuiTheme({
        palette: { 
          primary: {
            main: '#0088cc',
          }
        },
      });

    const setName = (event) => { setInputNameAction(event.target.value) }

    const setType = (event) => { setInputTypeAction(event.target.value) }

    const searchButtonDisable = () => {
        if(name || type){
            console.log(name || type)
            // return name.length > 2 || type.length > 2
        }
        return false
    }

    return (
        <div className="searchForm">
            <form className='searchForm__form'>
                <ThemeProvider theme={theme}>
                    <TextField className='searchForm__input' onChange={setName} id="outlined-basic" label="Search by name" variant="outlined" size="small" color='primary'/>
                    <TextField className='searchForm__input' onChange={setType} id="outlined-basic" label="Search by type" variant="outlined" size="small" color='primary'/>

                    <IconButton
                    disabled={!searchButtonDisable()}
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
    type: state.searchbox.type
})

export default connect(mapStateToProps,{ setInputNameAction, setInputTypeAction })(SearchForm);