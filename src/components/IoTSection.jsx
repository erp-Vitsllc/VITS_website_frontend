import React from 'react';

const IoTSection = () => {
    const bgPath = "/assets/Vega-Digital-IoT.webp";

    return (
        <section id="iot-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="IoT Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">IOT COMPANIES IN DUBAI</h2>
                <p className="contact-hero-description">
                    Reliable <span style={{ color: '#e31e24', fontWeight: '500' }}>Iot Companies in Dubai</span> are scarce and relatively less. We have the expertise to Connect devices, systems and automate processes to gain real time data and analytics for smarter and informed decision making. Unlock your business potential with our IoT solutions.
                </p>
            </div>
        </section>
    );
};

export default IoTSection;
