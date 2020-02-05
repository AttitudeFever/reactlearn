import React from 'react'
import { Link } from 'react-router-dom';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function Home() {
    return (
        <div className="hero-image">
                    
                        <h1 className="heading">MRU Movie Collection
                            <img className="logo" src="./logo.png" alt="MRU Theater Logo" />
                            <div className="buttonPack" >
                                <Link to='/about'>
                                    <button className="btn btn-6">About Us &nbsp;&nbsp;&nbsp;<i className="fa fa-group"></i></button>
                                </Link>
                                <Link to='/main'>
                                    <button className="btn btn-5">List All Movies &nbsp;&nbsp;&nbsp;<i className="fa fa-film"></i></button> 
                                </Link>
                            </div>
                        </h1>
                
                <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search Movie Title..."/>
                        <a href={" "} className="search_icon"><i className="fas fa-search"></i></a>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Home
