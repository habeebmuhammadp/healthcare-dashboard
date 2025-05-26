import React from 'react';
import { upcomingAppointments } from '../../constants/data';
import './UpcomingSchedule.css';

// Helper function to get specialty class name
const getSpecialtyClass = (title) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('health checkup') || titleLower.includes('checkup')) {
    return 'health-checkup';
  }
  if (titleLower.includes('ophthalmologist') || titleLower.includes('eye')) {
    return 'ophthalmologist';
  }
  if (titleLower.includes('cardiologist') || titleLower.includes('heart')) {
    return 'cardiologist';
  }
  if (titleLower.includes('neurologist') || titleLower.includes('neuro')) {
    return 'neurologist';
  }
  return '';
};

// Helper function to get appropriate emoji based on appointment type
const getAppointmentEmoji = (title, originalIcon) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('health checkup') || titleLower.includes('checkup')) {
    return '🩺';
  }
  if (titleLower.includes('ophthalmologist') || titleLower.includes('eye')) {
    return '👁️';
  }
  if (titleLower.includes('cardiologist') || titleLower.includes('heart')) {
    return '❤️';
  }
  if (titleLower.includes('neurologist') || titleLower.includes('neuro')) {
    return '🧠';
  }
  if (titleLower.includes('dentist') || titleLower.includes('dental')) {
    return '🦷';
  }
  if (titleLower.includes('therapy') || titleLower.includes('physio')) {
    return '🏃';
  }
  
  // Return original icon if no match found
  return originalIcon || '🏥';
};

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    
    {upcomingAppointments.map((dayGroup, index) => (
      <div key={index} className="schedule-day">
        <h4>On {dayGroup.day}</h4>
        <div className="day-appointments">
          {dayGroup.appointments.map((appointment, idx) => {
            const specialtyClass = getSpecialtyClass(appointment.title);
            const emoji = getAppointmentEmoji(appointment.title, appointment.icon);
            
            return (
              <div 
                key={idx} 
                className={`simple-appointment-card ${specialtyClass}`}
              >
                <div className="appointment-header">
                  <div className="appointment-info">
                    <span className="appointment-title">{appointment.title}</span>
                    <span className="appointment-time">{appointment.time}</span>
                  </div>
                  <span className="appointment-emoji">{emoji}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;