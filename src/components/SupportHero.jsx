import React from 'react';

const SupportHero = () => {
    const bgPath = "/assets/About-VEGA-Digital.webp";

    return (
        <section id="support-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Support Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">SUPPORT</h2>
                <p className="contact-hero-description">
                    At Vega Digital, we are committed to providing exceptional support for all your digital needs. Whether you require help with website development, software solutions, or digital marketing, our dedicated support team is here to assist you. Get in touch with us for prompt resolutions, expert guidance, and personalized assistance tailored to your unique business requirements. We're always ready to help you succeed.
                </p>
            </div>
        </section>
    );
};

export default SupportHero;
