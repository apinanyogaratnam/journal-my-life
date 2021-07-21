import React from 'react'
import '../index.css';
import { NavBar, Title, SubTitle, LoginButtons } from './login-page-components/index';

const LoginPage = () => {
    return (
        <div>
            <NavBar />
            <Title />
            <SubTitle />
            <hr />
            <LoginButtons />
        </div>
    )
}

export default LoginPage
