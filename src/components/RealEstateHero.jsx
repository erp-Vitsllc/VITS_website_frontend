import React from 'react';

const RealEstateHero = () => {
    const bgPath = "/assets/Vega-Digital-Real-Estate.webp";

    return (
        <section id="real-estate-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Real Estate Background"
                style={{ filter: 'brightness(0.6)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">REAL ESTATE</h2>
                <p className="contact-hero-description">
                    Transform your real estate operations with our advanced solutions, optimizing property management, transactions, and market analysis.
                </p>
            </div>
        </section>
    );
};

export default RealEstateHero;
