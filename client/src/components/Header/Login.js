//태형 2020-04-07 21:40 수정

import React, { Component } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import FavorIcon from '../Tabs/MainTab/itemlist/FavorIcon';
class Login extends Component {
    render() {
        return (
            <span id = 'login_wrap'>
                <FavorIcon></FavorIcon>
                <NavLink exact to = {'signin'}>
                    <button class = 'login_button'>로그인</button>
                </NavLink>
                <NavLink exact to={'signup'}>
                    <button className='login_button'>회원가입</button>
                </NavLink>
            </span>
        )
    }
}

export default Login;