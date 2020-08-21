import React from 'react';
import CardItem from '../card/Card';
import { connect } from 'react-redux';
import './Collection.css';

const Collection = ({ collection }) => {
    return (
        <div className='collection'>
            { 
            collection &&
            collection.map(({id, ...otherProps}) => 
                (
                    <CardItem key={id} {...otherProps} />
                ))
            } 
        </div>
    );
};

function mapStateToProps(state) {
    return {
        collection: state.searchbox.collection
}}

export default connect(mapStateToProps)(Collection);