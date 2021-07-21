import React from 'react'
import '../index.css';
import { Link } from 'react-scroll';

const LoginPage = () => {
    return (
        <div>
            {/* Nav Bar */}
            <Link to="">
                <div className="nav-bar">
                    <h4>Features</h4>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <h4>About</h4>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <h4>Pricing</h4>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <h4>Source code</h4>
                    &emsp;
                    <div class="vl" />
                    &emsp;
                    <h4>Contact</h4>
                </div>
            </Link>
        </div>
    )
}

export default LoginPage
