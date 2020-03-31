import React from 'react';
import '../../Css/Header.css'

function Logo() {
    return (
        <span id = "logo_wrap">
            <a href="http://localhost:3000/">
                <img id="logo" alt="strawberry" src="https://avatars2.githubusercontent.com/u/61527805?s=200&v=4" />
            </a>
        </span>
    );
}

export default Logo;