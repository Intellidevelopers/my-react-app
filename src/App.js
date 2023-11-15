import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    // Perform login logic (e.g., call an API, validate credentials)
    // For simplicity, we just set the user here
    setUser(credentials);
  };

  const handleSignup = (credentials) => {
    // Perform signup logic (e.g., call an API, create a new user)
    // For simplicity, we just set the user here
    setUser(credentials);
  };

  const handleLogout = () => {
    // Perform logout logic if needed
    setUser(null);
  };

  return (
    <div>
      {user ? ( 
        <div>
          <h2>Welcome, {user.username} {user.email}!</h2>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login handleLogin={handleLogin} />
          <Signup handleSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default App;
