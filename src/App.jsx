import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthCard from "./screens/Auth/Authentication";
import Dashboard from "./screens/Dashboard/DashBoard";
import ChatPage from "./screens/Chat/ChatPage";
import Books from "./screens/Books/Books";
import MusicLayout from "./screens/Music/MusicLayout";
import QuoteLayout from "./screens/Quotes/QuoteLayout";
import Wallpaper from "./screens/Wallpapers/Wallpapers";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Pass this to AuthCard to simulate login
  const handleAuthSuccess = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <AuthCard onAuthSuccess={handleAuthSuccess} />
            )
          }
        />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/music" element={<MusicLayout />} />
        <Route path="/quotes" element={<QuoteLayout />} />
        <Route path="/wallpapers" element={<Wallpaper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
