import React from 'react'
import { Link } from 'react-router-dom';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function Home() {
    return (
        <div className="hero-image">
                    <div className="headingbundle" >
                        <h1 className="heading">MRU Movie Collection
                            <img className="logo" src="./logo.png" alt="MRU Theater Logo" />
                            <Link to='/about'>
                                <a href={" "} class="btn btn-6">About Us</a> 
                            </Link>
                        </h1>
                    </div>
                
                <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search Movie Title..."/>
                        <a href={" "} className="search_icon"><i className="fas fa-search"></i></a>
                    </div>
                </div>
             </div>
             <Link to='/main'>
                <a href={" "} class="btn btn-5">List All Movies</a> 
             </Link>
        </div>
    )
}

export default Home
