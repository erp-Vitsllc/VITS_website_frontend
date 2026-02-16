import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-image-wrapper">
                    <img
                        src="/assets/globe.png"
                        alt="Global Network"
                        className="globe-image"
                    />
                </div>
                <div className="about-content">
                    <h3 className="about-subtitle">VEGA DIGITAL IT SOLUTIONS, RANKED AMONG THE BEST IT SOLUTION COMPANIES IN UAE</h3>
                    <h2 className="about-title">CONNECTING THE WORLD, ONE INNOVATION AT A TIME.</h2>
                    <p className="about-description">
                        We believe in integrated solutions and a world that's more connected. Our advanced
                        ELV, IoT, Robotics & Software Applications are Designed, Engineered, Developed
                        and Implemented in house. Our services drive digital transformation in advanced
                        security and IT solutions in UAE. With a commitment to excellence and a vision for
                        the future, we empower businesses in Real Estate, Infrastructure, Retail, Mining &
                        Manufacturing.
                    </p>
                    <p className="about-description">
                        Join us in creating a connected future thru a journey of innovation where advanced
                        technology meets unparalleled service.
                    </p>
                    <a href="#contact" className="about-link">
                        ABOUT US <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
