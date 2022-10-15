import React from 'react';
import './Nav.scss'
const Nav=(props)=>{
    return (
        <div className="topnav">
        <a class="active" href="/">Home</a>
        <a href="/news">News</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    );
}

export default Nav;