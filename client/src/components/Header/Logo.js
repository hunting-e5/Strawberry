import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <span id="logo_wrap">
            <NavLink exact to = '/'>
                <img id="logo" alt="strawberry" src="https://avatars2.githubusercontent.com/u/61527805?s=200&v=4" />
            </NavLink>
        </span>
    );
}

export default Logo;