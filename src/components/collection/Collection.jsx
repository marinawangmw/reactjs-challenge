import React from 'react';
import './Collection';

const Collection = ({ collection }) => {
    const { results } = collection.collection;
    console.log(results);
    return (
        <div className='collection'>
            { 
            results?
            results.map(item => 
                (<div key={item.id}>
                    <h1>{item.name}</h1> 
                    <h5>{item.species}</h5>
                </div>))
                : console.log('vacio')
            } 
        </div>
    );
};

export default Collection;