import React from 'react';

const ContactSection = () => {
    const bgPath = "/assets/Contact-Number-Vega-Digital-IT-Solutions.webp";

    return (
        <section id="contact-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Contact Background"
            />
            <div className="contact-overlay"></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">CONTACT US</h2>
                <p className="contact-hero-description">
                    We'd love to hear from you! Whether you have a question about our services,
                    need assistance, or want to explore partnership opportunities, our team is
                    here to help. Get in touch with us.
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
