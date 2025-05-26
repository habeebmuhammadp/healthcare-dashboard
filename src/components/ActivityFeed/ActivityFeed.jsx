import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
    // Organized chart data for 7 days with multiple bars per day
    const chartData = [
        { // Monday
            bars: [
                { height: 60, type: 'cyan' },
                { height: 80, type: 'dark' }
            ]
        },
        { // Tuesday
            bars: [
                { height: 90, type: 'dark' },
                { height: 40, type: 'cyan' },
                { height: 70, type: 'cyan' }
            ]
        },
        { // Wednesday
            bars: [
                { height: 45, type: 'cyan' },
                { height: 65, type: 'dark' },
                { height: 35, type: 'cyan' }
            ]
        },
        { // Thursday
            bars: [
                { height: 55, type: 'cyan' },
                { height: 85, type: 'dark' },
                { height: 75, type: 'cyan' },
                { height: 45, type: 'dark' }
            ]
        },
        { // Friday
            bars: [
                { height: 95, type: 'dark' },
                { height: 50, type: 'cyan' },
                { height: 70, type: 'cyan' },
                { height: 40, type: 'dark' }
            ]
        },
        { // Saturday
            bars: [
                { height: 60, type: 'cyan' },
                { height: 80, type: 'dark' },
                { height: 45, type: 'cyan' }
            ]
        },
        { // Sunday
            bars: [
                { height: 65, type: 'dark' },
                { height: 85, type: 'cyan' },
                { height: 55, type: 'dark' }
            ]
        }
    ];

    const dayLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="activity-feed">
            <div className="activity-header">
                <h3 className="activity-title">Activity</h3>
                <span className="activity-subtitle">3 appointments this week</span>
            </div>

            <div className="activity-chart">
                <div className="chart-container">
                    {chartData.map((day, dayIndex) => (
                        <div key={dayIndex} className="day-group">
                            {day.bars.map((bar, barIndex) => (
                                <div
                                    key={barIndex}
                                    className={`chart-bar ${bar.type}`}
                                    style={{ height: `${bar.height}%` }}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="chart-labels">
                    {dayLabels.map((day, index) => (
                        <span key={index} className="day-label">{day}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityFeed;