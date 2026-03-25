import React from 'react';
import { ArrowRight } from 'lucide-react';

const VideoAnalyticsSection = ({ onGetStartedClick }) => {
    const mainImage = "/assets/IoT-Video-Analytics-X.webp";
    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="video-analytics-section">
            <div className="analytics-container">
                <div className="analytics-content-side">
                    <h2 className="automation-title">VIDEO ANALYTICS</h2>
                    <p className="automation-description">
                        Our CCTV video analytics solutions leverage advanced technology to analyze video footage in real-time, providing Intelligent Video Analytics for valuable insights and enhancing security. With features like object detection, motion tracking, and behavior analysis, our system helps you monitor and respond to events efficiently. Improve operational efficiency, enhance safety, and make data-driven decisions with our intelligent video analytics solutions.
                    </p>
                    <a href="#" className="automation-link" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
                        GET STARTED <ArrowRight size={20} />
                    </a>
                </div>
                <div className="analytics-image-side">
                    <img src={mainImage} alt="Video Analytics" className="automation-main-img" />
                </div>
            </div>
            {/* Background line pattern */}
            <div className="analytics-bg-pattern">
                <img src={linePattern} alt="" />
            </div>
        </section>
    );
};

export default VideoAnalyticsSection;
