import React from 'react';
import CardItem from '../card/Card';
import { connect } from 'react-redux';
import './Collection.css';

const Collection = ({ collection, small, error=false }) => (
        <div className='collection'>
        {collection.length >= 1?
            collection[0].name !== null?
                collection
                .filter((item,idx) => {
                    if(small){
                        return idx < 5
                    }
                    return item
                })
                .map(item => (<CardItem key={item.id} item={item} small={small}/>))
            :
                 <p className="collection__errorMessage"> None </p>
             
        :error &&
             <p className="collection__errorMessage"> No data found ... </p>
        }
        </div>
);


const mapStateToProps = (state) => ({
    error: state.searchbox.error
})

export default connect(mapStateToProps)(Collection);