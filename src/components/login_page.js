import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../index.css';
import { NavBar, Title, SubTitle, LoginButtons, JournalsHomePage } from './login-page-components/index';

const LoginPage = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Title />
                <SubTitle />
                <hr />
                <LoginButtons />
                <Route path="/home" component={JournalsHomePage}/>
            </div>
        </Router>
    )
}

export default LoginPage
