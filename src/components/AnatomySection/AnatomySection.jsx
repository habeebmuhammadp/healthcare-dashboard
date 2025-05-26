import React from 'react';
import { Heart, Bone, Brain } from 'lucide-react';
import './AnatomySection.css';

const AnatomySection = () => (
    <div className="anatomy-section">
        <div className="anatomy-container">
            <div className="human-body">
                <img
                    src="/Human-Body-Free-PNG-Image.png"
                    alt="Human Body"
                    className="body-image"
                />

                {/* Heart Indicator with Scanning Box */}
                <div className="organ-scan-area heart-area">
                    <div className="scan-box">
                        <div className="scan-corners">
                            <div className="corner top-left"></div>
                            <div className="corner top-right"></div>
                            <div className="corner bottom-left"></div>
                            <div className="corner bottom-right"></div>
                        </div>
                        <div className="scan-line"></div>
                    </div>
                </div>
                <div className="connection-line heart-connection"></div>
                <div className="health-indicator heart">
                    <Heart size={16} className="indicator-icon" />
                    <span>Healthy Heart</span>
                </div>

                {/* Bone Indicator with Scanning Box */}
                <div className="organ-scan-area bone-area">
                    <div className="scan-box">
                        <div className="scan-corners">
                            <div className="corner top-left"></div>
                            <div className="corner top-right"></div>
                            <div className="corner bottom-left"></div>
                            <div className="corner bottom-right"></div>
                        </div>
                        <div className="scan-line"></div>
                    </div>
                </div>
                <div className="connection-line bone-connection"></div>
                <div className="health-indicator bone">
                    <Bone size={16} className="indicator-icon" />
                    <span>Bone Health</span>
                </div>



                {/* Brain Indicator with Scanning Box */}
                <div className="organ-scan-area brain-area">
                    <div className="scan-box">
                        <div className="scan-corners">
                            <div className="corner top-left"></div>
                            <div className="corner top-right"></div>
                            <div className="corner bottom-left"></div>
                            <div className="corner bottom-right"></div>
                        </div>
                        <div className="scan-line"></div>
                    </div>
                </div>
                <div className="connection-line brain-connection"></div>
                <div className="health-indicator brain">
                    <Brain size={16} className="indicator-icon" />
                    <span>Neurological</span>
                </div>

                <div className="health-log-button">
                    <button className="log-btn">
                        <span>Healthy Log</span>
                        <span className="log-date">26 Oct 2021</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default AnatomySection;