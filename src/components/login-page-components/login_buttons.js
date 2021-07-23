import React from 'react';
import { useHistory, Route } from 'react-router-dom';
import { AnonJournalsHomePage, ExistingUserJournalsHomePage } from '../index';
import GoogleLogin from 'react-google-login';

const LoginButtons = () => {
    let history = useHistory();

    const handleRouteHome = () => {
        history.push("/home");
    }

    const handleRouteUserHome = (props) => {
        history.push("/user/home", props);
    }

    const onSuccess = (response) => {
        handleRouteUserHome(response.profileObj);
    }

    const onFailure = () => {
        alert("Failed to sign in with google");
    }

    const customStyle = {
        fontFamily: 'Poppins',
        fontWeight: 'bolder',
        borderColor: 'black',
        borderRadius: "5px",
        borderWidth: "1px"
    };

    return (
        <div className="login-button-container">
            <GoogleLogin 
                className="google-button"
                clientId="705798389505-tekjliqf2bfbfsk5pi4s6n0ghprg8dud.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} style={customStyle}>Continue with Google</button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
            <button onClick={handleRouteHome}>Browse Anonymously</button>
            <Route path="/home" component={AnonJournalsHomePage} />
            <Route path="/user/home" component={ExistingUserJournalsHomePage} />
        </div>
    );
}

export default LoginButtons
