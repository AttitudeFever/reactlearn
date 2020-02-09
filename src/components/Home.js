import React from 'react'
import { Link } from 'react-router-dom';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={ 
            searchValue : ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.setSearchFLAG = this.setSearchFLAG.bind(this);
        this.setListAllFLAG = this.setListAllFLAG.bind(this);
    }

    handleChange(e){
        const searching = e.target.value;
        this.setState( {searchValue : searching} )
    }

    setSearchFLAG(){
        let searchFLAG = true;
        let listAllFLAG = false;
        let FilterFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, FilterFLAG);
        this.props.getSearchValue(this.state.searchValue);
    }

    setListAllFLAG(){
        let searchFLAG = false;
        let listAllFLAG = true;
        let FilterFLAG = false;
        this.props.getFLAGS(searchFLAG, listAllFLAG, FilterFLAG) 
    }

    render(){
        return (
            <div className="hero-image">
                <h1 className="heading">MRU Movie Collection
                    <img className="logo" src="./logo.png" alt="MRU Theater Logo" />
                    <div className="buttonPack" >
                        <Link to='/about'>
                            <button className="btn btn-6">About Us &nbsp;&nbsp;&nbsp;<i className="fa fa-group"></i></button>
                        </Link>
                        <Link to='/main'>
                            <button className="btn btn-5" onClick={this.setListAllFLAG}>List All Movies &nbsp;&nbsp;&nbsp;<i className="fa fa-film"></i></button> 
                        </Link>
                    </div>
                </h1>
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search Movie Title..."/>
                            <Link to='/main'>
                                <div className="search_icon" onClick={this.setSearchFLAG}><i className="fas fa-search"></i></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
