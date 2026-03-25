import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionProductSection = ({ title, description, image, layout = 'left', onGetStartedClick, ctaText = "GET STARTED", variant = 'dark' }) => {
    const linePattern = "/assets/Lines-3.webp";
    
    // Choose classes based on layout to swap content/image positions
    const sectionClass = layout === 'left' ? "smart-automation-section" : "video-analytics-section";
    const variantClass = variant === 'light' ? 'light-variant' : '';
    const containerClass = layout === 'left' ? "automation-container" : "analytics-container";
    const contentSideClass = layout === 'left' ? "automation-content-side" : "analytics-content-side";
    const imageSideClass = layout === 'left' ? "automation-image-side" : "analytics-image-side";
    const bgPatternClass = layout === 'left' ? "automation-bg-pattern" : "analytics-bg-pattern";

    return (
        <section className={`${sectionClass} ${variantClass}`}>
            <div className={containerClass}>
                {layout === 'left' && (
                    <div className={imageSideClass}>
                        <img src={image} alt={title} className="automation-main-img" />
                    </div>
                )}
                
                <div className={contentSideClass}>
                    <h2 className="automation-title">
                        {title === "TECHNICAL SUPPORT SERVICES" ? (
                            <>
                                <span style={{ backgroundColor: '#0b3fa4', display: 'inline-block', padding: '2px 12px', margin: '4px 0', whiteSpace: 'nowrap' }}>TECHNICAL SUPPORT</span><br/>
                                <span style={{ backgroundColor: '#0b3fa4', display: 'inline-block', padding: '2px 12px', margin: '4px 0', whiteSpace: 'nowrap' }}>SERVICES</span>
                            </>
                        ) : title}
                    </h2>
                    <p className="automation-description">{description}</p>
                    <a href="#" className="automation-link" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
                        {ctaText} <ArrowRight size={20} />
                    </a>
                </div>

                {layout === 'right' && (
                    <div className={imageSideClass}>
                        <img src={image} alt={title} className="automation-main-img" />
                    </div>
                )}
            </div>
            
            <div className={bgPatternClass}>
                <img src={linePattern} alt="" style={{ 
                    transform: layout === 'right' ? 'scaleX(-1)' : 'none',
                    left: layout === 'right' ? '-5%' : 'auto',
                    right: layout === 'left' ? '-5%' : 'auto'
                }} />
            </div>
        </section>
    );
};

export default SolutionProductSection;
