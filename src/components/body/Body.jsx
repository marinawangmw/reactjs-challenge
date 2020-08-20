import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import './Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            type:null
        }
    }

    handleChangeName = (e) => {
        this.setState({ name:e.target.value }) 
      }

    handleChangeType = (e) => {
        this.setState({ type:e.target.value }) 
    }

    render(){
        return (
            <div className="body">
                <SearchForm 
                    handleChangeName={this.handleChangeName}
                    handleChangeType={this.handleChangeType}/>
                <Collection collection={this.props} />
            </div>
        );
    }
};

export default Body;