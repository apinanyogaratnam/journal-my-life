import React from 'react';
import '../../index.css';
import { Route } from 'react-router-dom';
import { LoginButtons, AnonJournalsHomePage, ExistingUserJournalsHomePage, NavBar, Title, SubTitle } from '../index';

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
