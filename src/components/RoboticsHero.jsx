import React from 'react';

const RoboticsHero = () => {
    const bgPath = "/assets/Vega-Digital-Robotics.webp";

    return (
        <section id="robotics-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Robotics Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">ROBOTICS IN UAE</h2>
                <p className="contact-hero-description">
                    Robotics Revolutionize your operations with our futuristic business solution with advanced robotics in UAE. Automate tasks, increase precision and boost productivity with cutting-edge technology. Automation with robotics is the future.
                </p>
            </div>
        </section>
    );
};

export default RoboticsHero;
