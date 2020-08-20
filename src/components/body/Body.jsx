import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import './Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            type:''
        }
    }

    handleChangeName = (e) => {
        this.setState({ name:e.target.value }) 
      }

    handleChangeType = (e) => {
        this.setState({ type:e.target.value }) 
    }

    searchButtonDisable = () => {
        if(this.state.name || this.state.type){
            return this.state.name.length > 2 || this.state.type.length > 2
        }
        return false
    }

    render(){
        
        return (
            <div className="body">
                <SearchForm 
                    handleChangeName={this.handleChangeName}
                    handleChangeType={this.handleChangeType}
                    disable={this.searchButtonDisable()}/>
                <Collection collection={this.props} />
                {/* paginador */} 
            </div>
        );
    }
};

export default Body;