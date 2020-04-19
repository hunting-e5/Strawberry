/* 2020-04-07 23:49 태형 수정 */

import React from 'react';
import './Header.css'
import Logo from './Logo';
import SearchBox from './SearchBox';
import Login from './Login';
import MenuDrawer from './MenuDrawer';

function Header() {
    return (
        <div id="header_wrap">
            <div id='header'>
                <div id="top_banner">
                    <MenuDrawer />
                    <Logo />
                    <SearchBox />
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default Header;