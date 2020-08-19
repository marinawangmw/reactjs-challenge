import React from 'react';
import SearchBox from '../searchbox/SearchBox';
import CustomBotton from '../customBotton/CustomBotton';

const SearchForm = () => {
    return (
        <div className="searchForm">
            <SearchBox />
            <CustomBotton />
        </div>
    );
};

export default SearchForm;