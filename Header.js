import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const logoAltText = "Bite Me Bistro Restorent";

    const handleHelpClick = () => navigate('/contact-us');
    const handleSignUpClick = () => navigate('/signup');

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={require('../assets/images/logo.jpg')} alt={logoAltText} />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
            <div className="nav-buttons">
                <button className="nav-button" onClick={handleHelpClick} aria-label="Help Center">
                    <i>❓</i> Need Support
                </button>
                <button className="nav-button" onClick={handleSignUpClick} aria-label="Sign In or Register">
                    <i>👤</i> Sign Up/ Login
                </button>
            </div>
        </header>
    );
};

export default Header;
