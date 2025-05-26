import React from 'react';
import { navigationItems } from '../../constants/data';
import './Sidebar.css';

const Sidebar = () => {
  const mainItems = navigationItems.filter(item => item.label !== 'Setting');
  const settingsItem = navigationItems.find(item => item.label === 'Setting');

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">General</h3>
        <nav className="nav-menu">
          {mainItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                <Icon size={20} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </div>
            );
          })}
          <div className="spacer" />
          <div className={`nav-item settings-item ${settingsItem.active ? 'active' : ''}`}>
            <settingsItem.icon size={20} className="nav-icon" />
            <span className="nav-label">{settingsItem.label}</span>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;