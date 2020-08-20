import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import Collection from '../collection/Collection';
import Pagination from '@material-ui/lab/Pagination';
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
                <div className="body__header">
                    <SearchForm 
                        handleChangeName={this.handleChangeName}
                        handleChangeType={this.handleChangeType}
                        disable={this.searchButtonDisable()}/>
                </div>
                <div className="body__body">
                    <Collection collection={this.props} />
                </div>
                <div className="body__pagination">
                    <Pagination count={3} shape="rounded" size="large" />
                </div>
            </div>
        );
    }
};

export default Body;