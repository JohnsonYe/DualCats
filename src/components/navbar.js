import React from "react";
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export const NavBar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div>
                    <Link to={'/'} className="nav-link nav-logo">
                        <h1>Dualcats</h1>
                    </Link>
                </div>

                <ul>
                    <li className='navbar-list home'>
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>

                    <li className='navbar-list community'>
                        <Link to={'/community'} className="nav-link">Community</Link>
                    </li>

                    <li className='navbar-list catsGallery'>
                        <Link to={'/catsGallery'} className="nav-link">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}