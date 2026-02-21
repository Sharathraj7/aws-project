import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="p-4" style={{border: '1px solid #00ffff'}}>
                        <h2 className="text-center cyber-glitch">Create Your Account</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" style={{backgroundColor: '#0a0a0a', color: '#00ffff', border: '1px solid #ff00ff'}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" style={{backgroundColor: '#0a0a0a', color: '#00ffff', border: '1px solid #ff00ff'}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" style={{backgroundColor: '#0a0a0a', color: '#00ffff', border: '1px solid #ff00ff'}}/>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className="mt-3 text-center">
                            Already have an account? <Link to="/" style={{color: '#00ffff'}}>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
