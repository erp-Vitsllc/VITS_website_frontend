import React from 'react';

const AboutHero = () => {
    const bgPath = "/assets/About-VEGA-Digital.webp";

    return (
        <section id="about-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="About us Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">ABOUT US</h2>
                <p className="contact-hero-description">
                    Welcome to VEGA DIGITAL, a leading innovator technology and Integrated systems dedicated to delivering excellence, sustainability, and innovation in everything we do. Since our founding, we have grown from a visionary idea into a thriving enterprise with a global presence, serving clients and communities with passion and integrity.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
