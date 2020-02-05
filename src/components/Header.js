import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <img className="logo" src="../logo.png" alt="MRU Theater Logo" />
            <Link to='/about'>
                <button className="btn btn-6">About Us &nbsp;&nbsp;&nbsp;<i className="fa fa-group"></i></button>
            </Link>
        </div>
    )
}

export default Header
