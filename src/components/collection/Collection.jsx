import React from 'react';
import CardItem from '../card/Card';
import './Collection.css';

const Collection = ({ collection, small }) => {
    
    return (
        <div className='collection'>
            { 
            collection?
            collection
                .filter((item,idx) => {
                    if(small){
                        return idx < 5
                    }
                    return item
                })
                .map(item => (
                    <CardItem key={item.id} item={item} small={small}/>
                ))
            : console.log('sin datos')
            } 
        </div>
    );
};



export default Collection;