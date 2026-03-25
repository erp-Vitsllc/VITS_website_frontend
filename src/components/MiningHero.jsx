import React from 'react';

const MiningHero = () => {
    const bgPath = "/assets/mining-solutions.webp";

    return (
        <section id="mining-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Mining Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">MINING</h2>
                <p className="contact-hero-description">
                    Optimize your mining operations with our innovative solutions, enhancing efficiency, safety, and productivity in every phase.
                </p>
            </div>
        </section>
    );
};

export default MiningHero;
