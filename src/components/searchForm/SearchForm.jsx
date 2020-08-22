import React, { useState, useEffect } from 'react';
import InputField from '../inputField/InputField';
import ButtonAction from '../buttonAction/ButtonAction';
import SearchIcon from '@material-ui/icons/Search';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import { connect } from 'react-redux';
import { setInputNameAction, setInputTypeAction, limpiarInputAction, limpiarCollectionAction, getCollectionAction } from '../../redux/searcherDuck';
import './SearchForm.css';

const SearchForm = ({ name='', tipo='', filter,
                    setInputNameAction, setInputTypeAction, limpiarInputAction, limpiarCollectionAction, getCollectionAction }) => {
    
    // Desabilitar el boton de buscar si hay menos de 3 caracteres 
    const [disable, setDisable] = useState(false)
    useEffect(() => {
        if(!name && !tipo){
            setDisable(false)
            return
        }
        setDisable(name.length >2 || tipo.length > 2)

    },[name,tipo])

    // dispatchers
    const setName = (event) => { setInputNameAction(event.target.value) }
    const setType = (event) => { setInputTypeAction(event.target.value) }

    const getCollection = (event) => { 
        event.preventDefault()
        getCollectionAction() 
    } 

    const clearInput = (event) => { 
        event.preventDefault()
        limpiarInputAction()
        limpiarCollectionAction()
    }

    return (
        <div className="searchForm">
            <form className='searchForm__form'>
                <InputField 
                    label="Search by name" 
                    value={name}
                    handleChange={setName} 
                />

                <InputField 
                    label="Search by type" 
                    value={tipo}
                    handleChange={setType} 
                    disabled={filter==='episodes'}
                />
                
                <ButtonAction
                    disabled={!disable}
                    type='submit'
                    handleClick={getCollection}
                >
                    <SearchIcon/>
                </ButtonAction>

                <ButtonAction handleClick={clearInput}>
                    <ClearRoundedIcon />
                </ButtonAction>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: state.searcher.name,
    tipo: state.searcher.tipo,
    filter: state.searcher.filter
})

export default connect(mapStateToProps,{ setInputNameAction, setInputTypeAction, limpiarInputAction, limpiarCollectionAction, getCollectionAction })(SearchForm);