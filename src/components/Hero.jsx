import React from 'react';

const Hero = ({ config }) => {
    return (
        <section className="hero-section">
            <video
                className="video-background"
                autoPlay
                loop
                muted
                playsInline
                style={{ backgroundColor: '#2a2d34' }}
            >
                <source src={config.hero.videoPath} type="video/quicktime" />
                <source src={config.hero.videoPath} type="video/mp4" />
                {/* Fallback for when video isn't loaded */}
            </video>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h2 className="main-title">
                    {config.hero.title.split(' ').map((word, i) => (
                        <span key={i} className="title-line">
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    );
};

export default Hero;
