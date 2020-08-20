import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import Pagination from '@material-ui/lab/Pagination';
import './Body.css';

const Body = () =>  (
    <div className="body">
        <div className="body__header">
            <SearchForm />
        </div>
        <div className="body__body">
            <Collection />
        </div>
        <div className="body__pagination">
            <Pagination count={3} shape="rounded" size="large" />
        </div>
    </div>
);

export default Body;