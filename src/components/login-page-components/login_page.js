import React from 'react';
import '../../index.css';
import { Route } from 'react-router-dom';
import { LoginButtons, AnonJournalsHomePage, NavBar, Title, SubTitle } from '../index';

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
                    <AnonJournalsHomePage />
                </>
            )} />
        </div>
    )
}

export default LoginPage
