import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import Paginator from '../paginator/Paginator';
import MessageCard from '../messageCard/MessageCard';

import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import './Body.css';


const Body = ({ collection, error=false, fetching=false }) =>  {
    
    return(
    <div className="body">

        <div className="body__header">
            <SearchForm />
        </div> 

        <div className="body__container">
            {
                fetching || error?
                    <MessageCard message={fetching?fetching:error}>
                      {
                          fetching? 
                          <CircularProgress className="body__progress"/> 
                          : 'No data found...'
                      }
                    </MessageCard>
                
                : // le paso la coleccion pq puede ser llamada desde otro lado
                 <Collection collection={collection} />
            }
        </div>

        <div className="body__pagination">
            <Paginator />
        </div>
    </div>
)};

function mapStateToProps(state) {
    return {
        collection: state.searcher.collection,
        error: state.searcher.error,
        fetching: state.searcher.fetching
}}

export default connect(mapStateToProps)(Body);