import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import Pagination from '@material-ui/lab/Pagination';
import { setPageAction } from '../../redux/searchboxDuck';
import { connect } from 'react-redux';
import './Body.css';


const Body = ({ collection, pages, setPageAction }) =>  {
    
    const handleChangePage = (event, value) => {
        setPageAction(value)
    }
    
    return(
    <div className="body">
        <div className="body__header">
            <SearchForm />
        </div> 
        <div className="body__body">
            <Collection collection={collection} />
        </div>
        <div className="body__pagination">
            <Pagination count={pages} shape="rounded" size="large" onChange={handleChangePage}/>
        </div>
    </div>
)};

function mapStateToProps(state) {
    return {
        collection: state.searchbox.collection,
        pages: state.searchbox.totalPages
}}

export default connect(mapStateToProps, { setPageAction })(Body);