import React from 'react';

const SubsidiariesSection = () => {
    const bgImage = "/assets/VITS-Partners.webp";

    return (
        <section id="subsidiaries" className="subsidiaries-section">
            <img 
                src={bgImage} 
                alt="Subsidiaries Background" 
                className="subsidiaries-video-bg"
            />
            <div className="subsidiaries-overlay"></div>

            <div className="subsidiaries-content">
                <h2 className="subsidiaries-title">OUR SUBSIDIARIES</h2>
                <p className="subsidiaries-description">
                    Together they help us serve diverse industries and markets, driving growth
                    and creating value for our customers. Our Subsidiaries are a reflection of our
                    commitment to innovation and Digital Transformation.
                </p>
            </div>
        </section>
    );
};

export default SubsidiariesSection;
