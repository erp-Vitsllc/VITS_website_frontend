import React from 'react';

const ManufacturingHero = () => {
    const bgPath = "/assets/manufacturing-solutions.webp";

    return (
        <section id="manufacturing-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Manufacturing Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">MANUFACTURING</h2>
                <p className="contact-hero-description">
                    Transform your manufacturing processes with our advanced solutions, boosting efficiency, precision, and productivity for a competitive edge.
                </p>
            </div>
        </section>
    );
};

export default ManufacturingHero;
