import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1 className="logo">Health<span>care.</span></h1>
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
    <div className="header-right">
      <Bell size={20} className="notification-icon" />
      <div className="user-profile">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
             alt="User" className="user-avatar" />
        <span className="user-name">Dr. Smith</span>
      </div>
      <button className="add-button">
        <Plus size={20} />
      </button>
    </div>
  </header>
);

export default Header;