import React from 'react';
import '../index.css';
import { Route } from 'react-router-dom';
import { NavBar, Title, SubTitle, LoginButtons, JournalsHomePage } from './login-page-components/index';

const LoginPage = () => {
    return (
        <div>
            <Route path='/' exact render={(props) => (
                <>
                    <NavBar />
                    <Title />
                    <SubTitle />
                    <hr />
                    <LoginButtons />
                </>
            )} />

            <Route path='/home' exact render={(props) => (
                <>
                    <JournalsHomePage />
                </>
            )} />
        </div>
    )
}

export default LoginPage
