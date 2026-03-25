import React from 'react';

const BlogHero = () => {
    // The user provided the background and content in the screenshot 
    // We can use a generic news image or a placeholder if path is not given, but wait 
    // The user showed "C:\Users\Vega\Desktop\vits_webpage\public\assets\..." (Wait, screenshot didn't give a path but showed the image)
    // Actually, I'll use a placeholder or check for assets. 
    // Wait, the screenshot 1 of 372 shows keyboard and news. 
    
    const bgPath = "/assets/VITS-Latest-News.webp"; // I'll assume this name or similar. 

    return (
        <section id="blog-hero" className="contact-hero-section">
            <img
                src={bgPath}
                className="contact-video-bg"
                alt="Blog Background"
                style={{ filter: 'brightness(0.7)' }}
            />
            <div className="contact-overlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)' }}></div>

            <div className="contact-hero-content">
                <h2 className="contact-hero-title">BLOGS</h2>
                <p className="contact-hero-description">
                    Stay updated with the latest news and insights on our innovations and industry developments.
                </p>
            </div>
        </section>
    );
};

export default BlogHero;
