import React from 'react';

const LeadershipHero = () => {
    const bgPath = "/assets/VITS-Leadership-Team.webp";

    return (
        <section id="leadership-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Leadership Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">LEADERSHIP TEAM</h2>
                <p className="contact-hero-description">
                    Meet our visionary leadership team driving innovation and excellence for a connected future.
                </p>
            </div>
        </section>
    );
};

export default LeadershipHero;
