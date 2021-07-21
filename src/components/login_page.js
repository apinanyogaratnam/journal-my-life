import React from 'react'
import '../index.css';
import { Link } from 'react-scroll';

const LoginPage = () => {
    return (
        <div>
            {/* Nav Bar - create new file for it*/}
                <div className="nav-bar">
                    <Link to="">
                        <h4>Features</h4>
                    </Link>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <Link to="">
                        <h4>About</h4>
                    </Link>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <Link to="">
                        <h4>Pricing</h4>
                    </Link>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <Link to="">
                        <h4>Source code</h4>
                    </Link>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <Link to="">
                        <h4>Contact</h4>
                    </Link>
                </div>
        </div>
    )
}

export default LoginPage
