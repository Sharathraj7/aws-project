import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="p-5" style={{border: '2px solid #00ffff'}}>
                        <h1 className="display-4 cyber-glitch">Welcome to the Future of Learning</h1>
                        <p className="lead" style={{color: '#ecf0f1'}}>Our AI-powered platform personalizes your learning experience to help you achieve your goals faster.</p>
                        <hr className="my-4" style={{borderColor: '#ff00ff'}}/>
                        <p style={{color: '#ecf0f1'}}>Explore our courses and start your journey today.</p>
                        <Link className="btn btn-primary btn-lg" to="/signup" role="button">Get Started</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1526738549149-8e072d544146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="AI Learning" className="img-fluid" style={{border: '2px solid #ff00ff'}}/>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="p-4 h-100" style={{border: '1px solid #00ffff'}}>
                        <h2 className="cyber-glitch">Personalized Learning Paths</h2>
                        <p style={{color: '#ecf0f1'}}>Our AI analyzes your skills and goals to create a unique learning path just for you.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 h-100" style={{border: '1px solid #00ffff'}}>
                        <h2 className="cyber-glitch">Interactive Exercises</h2>
                        <p style={{color: '#ecf0f1'}}>Engage with our interactive exercises and get real-time feedback to improve your understanding.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 h-100" style={{border: '1px solid #00ffff'}}>
                        <h2 className="cyber-glitch">Expert-Led Courses</h2>
                        <p style={{color: '#ecf0f1'}}>Learn from industry experts and get access to high-quality course materials.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
