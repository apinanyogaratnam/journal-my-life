import React from 'react'
import '../../index.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
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
    )
}

export default NavBar
