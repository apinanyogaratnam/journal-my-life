import React from 'react';
import '../../index.css';
import { LoginButtons, NavBar, Title, SubTitle } from '../index';
import GoogleLogin from 'react-google-login';

const LoginPage = () => {
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    return (
        <div>
            <NavBar />
            <Title />
            <SubTitle />
            <hr />
            <LoginButtons />
            <GoogleLogin 
                clientId=""
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default LoginPage
