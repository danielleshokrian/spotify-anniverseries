import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Home } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Music className="navbar-icon" />
          <span className="navbar-title">Music Anniversary Finder</span>
        </Link>
        
        {!isHome && (
          <Link to="/" className="navbar-home-btn">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        )}
      </div>
    </nav>
  );
}