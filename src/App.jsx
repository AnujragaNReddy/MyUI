import './App.css';
import React, { useState } from 'react';
import AuthCard from './screens/Auth/Authentication';
import Dashboard from './screens/Dashboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Pass this to AuthCard to simulate login
  const handleAuthSuccess = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return isAuthenticated ? (
    <Dashboard onLogout={handleLogout} />
  ) : (
    <AuthCard onAuthSuccess={handleAuthSuccess} />
  );
}

export default App;
