import React from 'react';

const InfrastructureHero = () => {
    const bgPath = "/assets/Vega-Digital-Infrastructure.webp";

    return (
        <section id="infrastructure-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Infrastructure Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">INFRASTRUCTURE</h2>
                <p className="contact-hero-description">
                    Revolutionize your infrastructure with our advanced solutions, enhancing efficiency, connectivity, and sustainability for modern projects.
                </p>
            </div>
        </section>
    );
};

export default InfrastructureHero;
