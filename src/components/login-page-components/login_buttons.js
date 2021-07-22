import React from 'react';
import { useHistory, Route} from 'react-router-dom';
import { AnonJournalsHomePage } from '../index';

const LoginButtons = () => {
    let history = useHistory();

    const handleRouteHome = () => {
        history.push("/home");
    }

    return (
        <div className="login-button-container">
            <button>Continue With Google</button>
            <button onClick={handleRouteHome}>Browse Anonymously</button>
            <Route path="/home" component={AnonJournalsHomePage} />
        </div>
    );
}

export default LoginButtons
