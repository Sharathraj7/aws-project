import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="cyber-glitch h4">AI Learning Platform</h1>
                    </Link>
                    <nav>
                        <Link to="/" className="me-3" style={{color: '#00ffff'}}>Home</Link>
                        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
