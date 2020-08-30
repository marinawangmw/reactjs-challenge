import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { setPageAction, getCollectionAction } from '../../redux/searcherDuck';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Paginator = () => {
    
    const totalPages = useSelector(
        (state: RootState) => state.searcher.totalPages
    )

    const currentPage = useSelector(
        (state: RootState) => state.searcher.page
    )

    const dispatch = useDispatch();
    
    const handleChangePage = (event: any, value: number) => {
        dispatch(setPageAction(value));
        dispatch(getCollectionAction())
    }

    return (
        <div className='paginator'>
            <Pagination page={currentPage? currentPage: 1} count={totalPages} shape="rounded" size="large" onChange={handleChangePage}/>
        </div>
    );
};

export default Paginator;