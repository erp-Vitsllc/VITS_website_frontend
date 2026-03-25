import React from 'react';
import { ArrowRight } from 'lucide-react';

const InfrastructureManagementSection = ({ onGetStartedClick }) => {
    const mainImage = "/assets/IoT-Building-Management-X.webp";
    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="video-analytics-section">
            <div className="analytics-container">
                <div className="analytics-content-side">
                    <h2 className="automation-title">INFRASTRUCTURE MANAGEMENT</h2>
                    <p className="automation-description">
                        Our building management solutions streamline the operation and maintenance of your facilities with smart technology. From energy management and security systems to hvac and lighting control, we provide integrated solutions that enhance efficiency and reduce costs. Monitor and manage building systems in real-time for optimal performance and comfort. Transform your facility with our advanced building management technology.
                    </p>
                    <a href="#" className="automation-link" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
                        GET STARTED <ArrowRight size={20} />
                    </a>
                </div>
                <div className="analytics-image-side">
                    <img src={mainImage} alt="Infrastructure Management" className="automation-main-img" />
                </div>
            </div>
            {/* Background line pattern */}
            <div className="analytics-bg-pattern">
                <img src={linePattern} alt="" />
            </div>
        </section>
    );
};

export default InfrastructureManagementSection;
