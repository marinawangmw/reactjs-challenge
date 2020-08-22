import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { setPageAction } from '../../redux/searcherDuck';
import { connect } from 'react-redux';

const Paginator = ({ pages, setPageAction }) => {
    
    const handleChangePage = (event, value) => {
        setPageAction(value)
    }
    return (
        <div className='paginator'>
            <Pagination count={pages} shape="rounded" size="large" onChange={handleChangePage}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        pages: state.searcher.totalPages
}}

export default connect(mapStateToProps, { setPageAction })(Paginator);