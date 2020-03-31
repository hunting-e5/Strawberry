import React from 'react';
import '../Css/Category.css';
import { NavLink } from 'react-router-dom';

function Category() {
    return (
        <div id = 'category_wrap'>
            <button class = 'category'><NavLink exact to = {'search'}>냉장고</NavLink></button>
            <button class = 'category'><NavLink exact to = {'search'}>전공책</NavLink></button>
            <button class = 'category'><NavLink exact to = {'search'}>킥보드, 자전거</NavLink></button>
            <button class = 'category'><NavLink exact to = {'search'}>가구</NavLink></button>
            <button class = 'category'><NavLink exact to = {'search'}>옷</NavLink></button>
            <button class = 'category'><NavLink exact to = {'search'}>원룸</NavLink></button>
        </div>
    );
}

export default Category;