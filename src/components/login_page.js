import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
