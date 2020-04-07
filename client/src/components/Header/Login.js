import React, { Component } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <span id='login_wrap'>
                <NavLink exact to={'signin'}>
                    <button className='login_button'>로그인</button>
                </NavLink>
                <NavLink exact to={'signup'}>
                    <button className='login_button'>회원가입</button>
                </NavLink>
            </span>
        )
    }
}

export default Login;