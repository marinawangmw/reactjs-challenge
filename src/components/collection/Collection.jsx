import React from 'react';
import CardItem from '../card/Card';
import './Collection.css';

const Collection = ({ collection }) => {
    const { results } = collection.collection;
    return (
        <div className='collection'>
            { 
            results &&
            results.map(item => 
                (
                    <CardItem key={item.id} item={item} />
                ))
            } 
        </div>
    );
};

export default Collection;