import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData } from '../../constants/data';
import './CalendarView.css';

const CalendarView = () => (
  <div className="calendar-section">
    <div className="calendar-header">
      <ChevronLeft size={20} className="calendar-nav" />
      <h3>{calendarData.month}</h3>
      <ChevronRight size={20} className="calendar-nav" />
    </div>
    
    <div className="calendar-grid">
      <div className="calendar-days-header">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
      </div>
      
      <div className="calendar-days">
        {calendarData.days.map((day, index) => (
          <div key={index} className="calendar-day">
            <span className="day-number">{day.day}</span>
            {day.appointments.map((time, idx) => (
              <div 
                key={idx} 
                className={`appointment-time ${
                  day.day === 26 ? 'active' : 
                  day.day >= 30 ? 'highlighted' : ''
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    
    <div className="appointment-cards">
      <div className="appointment-card dentist">
        <div className="appointment-icon">🦷</div>
        <div className="appointment-details">
          <h4>Dentist</h4>
          <p>09:00-11:00</p>
          <small>Dr Cameron Williamson</small>
        </div>
      </div>
      
      <div className="appointment-card physiotherapy">
        <div className="appointment-icon">🏃</div>
        <div className="appointment-details">
          <h4>Physiotherapy Appointment</h4>
          <p>11:00-12:00</p>
          <small>Dr Kevin Djores</small>
        </div>
      </div>
    </div>
  </div>
);

export default CalendarView;