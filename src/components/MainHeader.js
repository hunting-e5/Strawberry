import React from 'react';
import '../Css/Header.css'
import Logo from './Header/Logo';
import SearchBox from './Header/SearchBox';
import Login from './Header/Login';
import MainCategory from './MainCategory';

function MainHeader() {
    return (
        <div id = "header">
          <div id = "default">
            <Logo />
            <SearchBox />
            <Login />
          </div>
          <MainCategory />
        </div>
    );
}

export default MainHeader;