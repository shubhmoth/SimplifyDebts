import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const checkUniqueness = async (field, value) => {
    // Placeholder function
    console.log(`Checking uniqueness for ${field}: ${value}`);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... (rest of the handleSubmit function remains the same)
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                id="name"
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="johndoe@example.com"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input 
                id="contactNumber"
                type="tel" 
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)} 
                required 
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                id="username"
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                placeholder="johndoe123"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                id="confirmPassword"
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="login-redirect">
          <p>Already have an account? <Link to="/">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;