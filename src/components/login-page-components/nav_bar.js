import React from 'react'
import '../../index.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="">
                <h4 className="hover-links">Features</h4>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <h4 className="hover-links">About</h4>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <h4 className="hover-links">Pricing</h4>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <h4 className="hover-links">Source code</h4>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <h4 className="hover-links">Contact</h4>
            </Link>
        </div>
    )
}

export default NavBar
