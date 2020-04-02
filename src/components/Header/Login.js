import React, { Component } from 'react';
import '../../Css/Header.css'
import { NavLink } from 'react-router-dom'

class Login extends Component {
    render(){
        return (
            <span id = 'login_wrap'>
                <NavLink exact to = {'signin'}>
                    <button class = 'login'>로그인</button>
                </NavLink>
                <NavLink exact to = {'signup'}>
                    <button class = 'login'>회원가입</button>
                </NavLink>
            </span>
        )
    }
}

export default Login;