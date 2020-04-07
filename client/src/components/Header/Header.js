import React from 'react';
import './Header.css'
import Logo from './Logo';
import SearchBox from './SearchBox';
import Login from './Login';

function Header() {
    return (
        <div id="header_wrap">
            <div id='header'>
                <div id="top_banner">
                            <Logo />
                            <SearchBox />
                            <Login />
                </div>
            </div>
        </div>
    );
}

export default Header;