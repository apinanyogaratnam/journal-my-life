import React from 'react';
import '../../index.css';
import { LoginButtons, NavBar, Title, SubTitle } from '../index';

const LoginPage = () => {

    return (
        <div>
            <NavBar />
            <Title />
            <SubTitle />
            <hr />
            <LoginButtons />
        </div>
    );
}

export default LoginPage
