import React from 'react';
import { useHistory, Route} from 'react-router-dom';
import { JournalsHomePage } from '../index';


const LoginButtons = () => {
    let history = useHistory();

    const handleRoute = () => {
        history.push("/home");
    }

    return (
        <div className="button-container">
            <button>Continue With Google</button>
            <button onClick={handleRoute}>Browse Anonymously</button>
            <Route path="/home" component={JournalsHomePage} />
        </div>
    )
}

export default LoginButtons
