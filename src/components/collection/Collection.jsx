import React from 'react';
import CardItem from '../card/Card';
import './Collection.css';

const Collection = ({ collection, small }) => (
    <div className='collection'>

        {collection.length >= 1 &&
            !collection[0].name ?
                <p className="collection__errorMessage"> None </p>
            : collection
                .filter((item,idx) => {
                    if(small){
                        return idx < 5
                    }
                    return item
                })
                .map(item => (<CardItem key={item.id} item={item} small={small}/>))
        }
        </div>
);


export default Collection