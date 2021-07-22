import React from 'react';
import '../../index.css';
import { Route } from 'react-router-dom';
import { LoginButtons, AnonJournalsHomePage, ExistingUserJournalsHomePage, NavBar, Title, SubTitle } from '../index';

const LoginPage = () => {
    return (
        <div>
            <Route path='/' exact render={(props) => (
                <div>
                    <NavBar />
                    <Title />
                    <SubTitle />
                    <hr />
                    <LoginButtons />
                </div>
            )} />

            <Route path='/home' exact render={(props) => (
                <div>
                    <AnonJournalsHomePage />
                </div>
            )} />

            <Route path='/user/home' exact render={(props) => (
                <div>
                    <ExistingUserJournalsHomePage />
                </div>
            )} />
        </div>
    );
}

export default LoginPage
