import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="logo" src="../logo.png" alt="MRU Theater Logo" />
            </Link>
            <Link to='/about'>
                <button className="btn btn-6">About Us &nbsp;&nbsp;&nbsp;<i className="fa fa-group"></i></button>
            </Link>
            <Link to='/'>
                <button className="btn btn-5">Home &nbsp;&nbsp;&nbsp;<i className="fa fa-home"></i></button> 
            </Link>
        </div>
    )
}

export default Header
