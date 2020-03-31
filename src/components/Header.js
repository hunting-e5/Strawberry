import React from 'react';
import '../Css/Header.css'
import Logo from './Header/Logo';
import SearchBox from './Header/SearchBox';
import Login from './Header/Login';

function Header() {
    return (
        <div id = "header">
            <Logo />
            <SearchBox />
            <Login />
        </div>
    );
}

export default Header;