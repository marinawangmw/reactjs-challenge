import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import './Body.css';

const Body = ({ collection }) =>  (
    <div className="body">
        <div className="body__header">
            <SearchForm />
        </div> 
        <div className="body__body">
            <Collection collection={collection} />
        </div>
        <div className="body__pagination">
            <Pagination count={3} shape="rounded" size="large" />
        </div>
    </div>
);

function mapStateToProps(state) {
    return {
        collection: state.searchbox.collection
}}

export default connect(mapStateToProps)(Body);