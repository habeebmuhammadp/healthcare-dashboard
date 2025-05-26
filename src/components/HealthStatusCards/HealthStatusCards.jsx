import React from 'react';
import { healthStatusData } from '../../constants/data';
import './HealthStatusCards.css';

const HealthStatusCards = () => (
  <div className="health-status-cards">
    {healthStatusData.map((item, index) => (
      <div key={index} className="health-card">
        <div className="health-card-header">
          <span className="health-icon">{item.icon}</span>
          <span className="health-name">{item.name}</span>
        </div>
        <div className="health-date">{item.date}</div>
        <div className="progress-bar">
          <div 
            className={`progress-fill ${item.status}`} 
            style={{ width: `${item.progress}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;