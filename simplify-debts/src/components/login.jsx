import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // We'll create this CSS file for styling

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    const texts = ['Simplify Debts', 'Cash Flow Minimizer'];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeWriter = () => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting && currentCharIndex < currentText.length) {
        setTypewriterText(currentText.slice(0, currentCharIndex + 1));
        currentCharIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else if (isDeleting && currentCharIndex > 0) {
        setTypewriterText(currentText.slice(0, currentCharIndex - 1));
        currentCharIndex--;
        setTimeout(typeWriter, typingSpeed / 2);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          currentCharIndex = 0;
        }
        setTimeout(typeWriter, isDeleting ? 1000 : 500);
      }
    };

    typeWriter();

    // Cleanup function to clear the timeout when component unmounts
    return () => clearTimeout(typeWriter);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., authentication)
    console.log('Email or Username:', emailOrUsername, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="typewriter">{typewriterText}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailOrUsername">Email or Username</label>
            <input 
              id="emailOrUsername"
              type="text" 
              value={emailOrUsername} 
              onChange={(e) => setEmailOrUsername(e.target.value)} 
              required 
            />
          </div>
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
          <button type="submit" className="login-button">Log In</button>
        </form>

        <div className="signup-redirect">
          <p>New here? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;