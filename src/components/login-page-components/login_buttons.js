import React from 'react';
import { useHistory, Route} from 'react-router-dom';
import { AnonJournalsHomePage } from '../index';

const LoginButtons = () => {
    let history = useHistory();

    const handleRouteHome = () => {
        history.push("/home");
    }

    const handleRouteUserHome = () => {
        history.push("/user/home");
    }

    return (
        <div className="login-button-container">
            {/* onClick={handleRouteHome} */}
            <button>Continue With Google</button>
            <button onClick={handleRouteHome}>Browse Anonymously</button>
            <Route path="/home" component={AnonJournalsHomePage} />
            <Route path="/user/home" component={AnonJournalsHomePage} />
        </div>
    );
}

export default LoginButtons
