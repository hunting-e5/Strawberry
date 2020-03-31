import React from 'react';
import '../../Css/Header.css'

function Login() {
    return (
        <span id = 'login_wrap'>
            <button class = 'login'>로그인</button>
            <button class = 'login'>회원가입</button>
        </span>
    );
}

export default Login;