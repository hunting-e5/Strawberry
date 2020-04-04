import React from 'react';
import '../css/Header.css'
import Logo from './Header/Logo';
import SearchBox from './Header/SearchBox';
import Login from './Header/Login';
import MainCategory from './MainCategory';

function MainHeader() {
  return (
    <div id="header_wrap">
      <div id='header'>
        <div id="top_banner">
          <Logo />
          <SearchBox />
          <Login />
        </div>
        <MainCategory />
      </div>
    </div>
  );
}

export default MainHeader;