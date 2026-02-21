import React from 'react';

const ContactSection = () => {
    // Using a placeholder or a generic dark video if available, 
    // but for now, I'll use a dark background style to match the screenshot.
    const videoPath = "/assets/subsidiaries_bg.mov"; // Reusing the dark cinematic video if appropriate

    return (
        <section id="contact-hero" className="contact-hero-section">
            <video
                className="contact-video-bg"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoPath} type="video/quicktime" />
                <source src={videoPath} type="video/mp4" />
            </video>
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
