import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import AnatomySection from '../components/AnatomySection/AnatomySection';
import HealthStatusCards from '../components/HealthStatusCards/HealthStatusCards';
import CalendarView from '../components/CalendarView/CalendarView';
import ActivityFeed from '../components/ActivityFeed/ActivityFeed';
import UpcomingSchedule from '../components/UpcomingSchedule/UpcomingSchedule';
import './Dashboard.css';

const Dashboard = () => (
    <div className="app">
        <Header />
        <div className="app-body">
            <Sidebar />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h2>Dashboard</h2>
                    <span className="week-indicator">This Week</span>
                </div>

                <div className="dashboard-grid">
                    <div className="anatomy-activity-section">
                        <AnatomySection />
                        <ActivityFeed />
                    </div>

                    <div className="health-status-section">
                        <HealthStatusCards />
                    </div>

                    <div className="calendar-schedule-section">
                        <CalendarView />
                        <UpcomingSchedule />
                    </div>
                </div>
            </main>
        </div>
    </div>
);

export default Dashboard;