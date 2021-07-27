import React from 'react'
import '../../index.css';
import { Link } from 'react-scroll';

const NavBar = () => {

    const contact_link = "http://localhost:3000/#:~:text=Resume-,Copyright%20%C2%A9%202021";

    return (
        <div className="nav-bar">
            <Link to="">
                <a onClick={()=> window.open("https://github.com/apinanyogaratnam/journal-my-life#features", "_blank")}>
                    <h4 className="hover-links">Features</h4>
                </a>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <a onClick={()=> window.open("https://github.com/apinanyogaratnam/journal-my-life#about", "_blank")}>
                    <h4 className="hover-links">About</h4>
                </a>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <a onClick={()=> window.open("https://www.cctvcambridge.org/sites/default/files/styles/960x540/public/imagefield/free.jpg?itok=GHYEdiDE", "_blank")}>
                    <h4 className="hover-links">Pricing</h4>
                </a>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <a onClick={()=> window.open("https://github.com/apinanyogaratnam/journal-my-life", "_blank")}>
                    <h4 className="hover-links">Source Code</h4>
                </a>
            </Link>
            &emsp;
            &emsp;
            <div class="vl" />
            &emsp;
            &emsp;
            <Link to="">
                <a onClick={()=> window.open(contact_link, "_blank")}>
                    <h4 className="hover-links">Contact</h4>
                </a>
            </Link>
        </div>
    );
}

export default NavBar
