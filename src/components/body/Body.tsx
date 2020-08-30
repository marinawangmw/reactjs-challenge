import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import Paginator from '../paginator/Paginator';
import MessageCard from '../messageCard/MessageCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import './Body.css';

const Body = () =>  {    
    const collection = useSelector(
        (state: RootState) => state.searcher.collection
    )

    const error = useSelector(
        (state: RootState) => state.searcher.error
    )

    const fetching = useSelector(
        (state: RootState) => state.searcher.fetching
    )

    return(
    <div className="body">
        <div className="body__header">
            <SearchForm />
        </div> 

        <div className="body__container">
            {
                fetching || error?
                    <MessageCard> 
                      {
                          fetching ? 
                          <CircularProgress className="body__progress"/> 
                          : <p>No data found...</p>
                      }
                    </MessageCard>
                
                : 
                    <Collection collection={collection!} />
            } 
        </div>

        <div className="body__pagination">
            <Paginator />
        </div>
    </div>
)};

export default Body;