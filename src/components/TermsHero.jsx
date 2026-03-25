import React from 'react';

const TermsHero = () => {
    const bgPath = "/assets/VITS-Latest-News.webp"; // Using the same premium tech background

    return (
        <section id="terms-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Terms Background"
                style={{ filter: 'brightness(0.6) hue-rotate(280deg)' }} 
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">TERMS OF SERVICE</h2>
            </div>
        </section>
    );
};

export default TermsHero;
