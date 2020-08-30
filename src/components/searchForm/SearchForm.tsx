import React, { useState, useEffect, ChangeEvent } from 'react';
import InputField from '../inputField/InputField';
import ButtonAction from '../buttonAction/ButtonAction';
import SearchIcon from '@material-ui/icons/Search';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { setInputNameAction, setInputTypeAction, clearInputAction, getCollectionAction } from '../../redux/searcherDuck';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import './SearchForm.css';

const SearchForm = () => {
    // States
    const filter = useSelector(
        (state: RootState) => state.searcher.filter
    )

    const inputName = useSelector(
        (state: RootState) => state.searcher.inputName
    )

    const inputType = useSelector(
        (state: RootState) => state.searcher.inputType
    )

    // Dispatches
    const dispatch = useDispatch();
     
    const setName = (event: ChangeEvent<HTMLInputElement>) => { 
        dispatch(setInputNameAction(event.target.value)) 
    }
    
    const setType = (event: ChangeEvent<HTMLInputElement>) => { 
        dispatch(setInputTypeAction(event.target.value)) 
    }

    // Disable feature
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        if(!inputName && !inputType){
            setDisable(false)
            return
        }

        setDisable(inputName!.length >2 || inputType!.length > 2)
    },[inputName,inputType])

    // Event Handlers
    const getCollection = (event: React.MouseEvent) => { 
        event.preventDefault()
        dispatch(getCollectionAction());
    } 

    const clearInput = (event: React.MouseEvent) => { 
        event.preventDefault()
        dispatch(clearInputAction());
    }

    return (
        <div className="searchForm">
            <form className='searchForm__form'>
                <InputField 
                    label="Search by name" 
                    value={inputName? inputName: ''}
                    handleChange={setName} 
                />

                <InputField 
                    label="Search by type" 
                    value={inputType? inputType: ''}
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

export default SearchForm;