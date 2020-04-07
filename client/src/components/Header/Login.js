import React, { Component } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import FavorId from '../stories/FavorId';
class Login extends Component {
    render() {
        return (
<<<<<<< HEAD
            <span id = 'login_wrap'>
                <FavorId></FavorId>
                <NavLink exact to = {'signin'}>
                    <button class = 'login_button'>로그인</button>
=======
            <span id='login_wrap'>
                <NavLink exact to={'signin'}>
                    <button className='login_button'>로그인</button>
>>>>>>> 72b79932f4b1fd0ee785309a98c360b3c836129a
                </NavLink>
                <NavLink exact to={'signup'}>
                    <button className='login_button'>회원가입</button>
                </NavLink>
            </span>
        )
    }
}

export default Login;