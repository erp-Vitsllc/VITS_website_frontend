import React from 'react';
import { ArrowRight } from 'lucide-react';

const Industry4Section = ({ onGetStartedClick }) => {
    const mainImage = "/assets/IoT-Industry-4-X.webp";
    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="smart-automation-section">
            <div className="automation-container">
                <div className="automation-image-side">
                    <img src={mainImage} alt="Industry 4.0" className="automation-main-img" />
                </div>
                <div className="automation-content-side">
                    <h2 className="automation-title">INDUSTRY 4.0</h2>
                    <p className="automation-description">
                        Our industry 4.0 solutions drive the next generation of manufacturing with smart technologies and automation. Embrace iot, robotics, and advanced analytics to enhance production efficiency, improve quality, and reduce downtime. Our integrated systems offer real-time data and insights, transforming your operations into a more agile and intelligent manufacturing environment. Step into the future with our industry 4.0 solutions.
                    </p>
                    <a href="#" className="automation-link" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
                        GET STARTED <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            {/* Background line pattern */}
            <div className="automation-bg-pattern">
                <img src={linePattern} alt="" />
            </div>
        </section>
    );
};

export default Industry4Section;
