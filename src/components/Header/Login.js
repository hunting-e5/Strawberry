import React, { Component } from 'react';
import '../../css/Header.css'
import { NavLink } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <span id='login_wrap'>
                <NavLink exact to={'signin'}>
                    <button class='login_button'>로그인</button>
                </NavLink>
                <NavLink exact to={'signup'}>
                    <button class='login_button'>회원가입</button>
                </NavLink>
            </span>
        )
    }
}

export default Login;