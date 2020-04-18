/* 2020-04-09 23:53 태형 수정 */

import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

function SearchBox() {
    return (
        <span id="search_wrap">
            <input id="searchBox" type="text" name="searchfor" placeholder="찾고 싶은 물품을 검색해보세요." />
            <span class="search_icon_wrap">
                <NavLink exact to = {'/search?title='}>
                    <img class="search_icon" alt="search_icon" src="https://image.flaticon.com/icons/svg/54/54481.svg" />
                </NavLink>
            </span>
        </span>
    );
}

export default SearchBox;