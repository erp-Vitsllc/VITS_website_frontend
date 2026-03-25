import React from 'react';

const ELVHero = () => {
    const bgPath = "/assets/elv-applications.webp";

    return (
        <section id="elv-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="ELV Systems Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">SMART ELV SYSTEMS</h2>
                <p className="contact-hero-description">
                    Among the top ELV companies in Dubai, we stand out in the forefront in security systems to smart building management our products and services are designed & engineered for enhanced safety & efficiency ensuring reliable performance and scalable technology applications.
                </p>
            </div>
        </section>
    );
};

export default ELVHero;
