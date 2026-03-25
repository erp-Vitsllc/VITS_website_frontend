import React from 'react';

const RetailHero = () => {
    const bgPath = "/assets/Vega-Digital-Retail.webp";

    return (
        <section id="retail-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Retail Background"
                style={{ filter: 'brightness(0.6)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">RETAIL</h2>
                <p className="contact-hero-description">
                    Elevate your retail operations with our innovative solutions, enhancing customer experiences, inventory management, and sales efficiency.
                </p>
            </div>
        </section>
    );
};

export default RetailHero;
