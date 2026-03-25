import React from 'react';

const JourneyHero = () => {
    const bgPath = "/assets/Vega-Digital-Journey.webp";

    return (
        <section id="journey-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Our Journey Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">OUR JOURNEY</h2>
                <p className="contact-hero-description">
                    We set out in this journey, rooted with a bold vision and deep passion for innovation and excellence. We owe our success to the trust of our valued customers and the dedication of our incredible team, partners & subsidiaries.
                </p>
            </div>
        </section>
    );
};

export default JourneyHero;
