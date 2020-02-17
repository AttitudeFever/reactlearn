import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="logo" src="../logo2.png" alt="MRU Theater Logo" />
            </Link>
            <h1 className="heading2">WELCOME TO HM's MOVIE COLLECTION</h1>
            <div className="buttonPack">
                <Link to='/'>
                    <button className="home">Home <i className="fa fa-home"></i></button> 
                </Link>
                <Link to='/about'>
                    <button className="about">About Us <i className="fa fa-group"></i></button>
                </Link>
            </div>
        </div>
    )
}

export default Header
