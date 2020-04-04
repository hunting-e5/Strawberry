import React from 'react';
import './Header.css'

function SearchBox() {
    return (
        <span id="search_wrap">
            <input id="searchBox" type="text" name="searchfor" placeholder="찾고 싶은 물품을 검색해보세요." />
            <img id="search_icon" alt="search_icon" src="https://image.flaticon.com/icons/svg/54/54481.svg" />
        </span>
    );
}

export default SearchBox;