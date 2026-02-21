import React from 'react';

const SubsidiariesSection = () => {
    const videoPath = "/assets/subsidiaries_bg.mov";

    return (
        <section id="subsidiaries" className="subsidiaries-section">
            <video
                className="subsidiaries-video-bg"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoPath} type="video/quicktime" />
                <source src={videoPath} type="video/mp4" />
            </video>
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
