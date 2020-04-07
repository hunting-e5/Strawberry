import React from 'react';
import './Category.css';
import { NavLink } from 'react-router-dom';

function MainCategory() {
    return (
        <div id='category_wrap'>
            <NavLink exact to={'search'} class='button_wrap'><button class='category'>냉장고</button></NavLink>
            <NavLink exact to={'search'} class='button_wrap'><button class='category'>전공책</button></NavLink>
            <NavLink exact to={'search'} class='button_wrap'><button class='category'>킥보드, 자전거</button></NavLink>
            <NavLink exact to={'search'} class='button_wrap'><button class='category'>가구</button></NavLink>
            <NavLink exact to={'search'} class='button_wrap'><button class='category'>옷</button></NavLink>
            <NavLink exact to={'search'} class='button_wrap'><button class='category'>원룸</button></NavLink>
        </div>
    );
}

export default MainCategory;

