// Signup.js
import React, { useState } from 'react';

const Signup = ({ handleSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add signup logic here
      handleSignup({ email, password, username });
    };
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
  };

export default Signup;
