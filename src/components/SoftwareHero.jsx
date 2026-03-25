import React from 'react';

const SoftwareHero = () => {
    const bgPath = "/assets/Vega-Digital-Software-Development.webp";

    return (
        <section id="software-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Software Solutions Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">SOFTWARE SOLUTION IN UAE</h2>
                <p className="contact-hero-description">
                    Unlock your business potential with our custom software solution in uae, designed to enhance efficiency, streamline processes, and drive growth.
                </p>
            </div>
        </section>
    );
};

export default SoftwareHero;
