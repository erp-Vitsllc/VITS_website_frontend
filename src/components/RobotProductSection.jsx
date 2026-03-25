import React from 'react';
import { ArrowRight } from 'lucide-react';

const RobotProductSection = ({ title, description, image, layout = 'left', onGetStartedClick }) => {
    const linePattern = "/assets/Lines-3.webp";
    
    // Choose classes based on layout to swap content/image positions
    const sectionClass = layout === 'left' ? "smart-automation-section" : "video-analytics-section";
    const containerClass = layout === 'left' ? "automation-container" : "analytics-container";
    const contentSideClass = layout === 'left' ? "automation-content-side" : "analytics-content-side";
    const imageSideClass = layout === 'left' ? "automation-image-side" : "analytics-image-side";
    const bgPatternClass = layout === 'left' ? "automation-bg-pattern" : "analytics-bg-pattern";

    return (
        <section className={sectionClass}>
            <div className={containerClass}>
                {layout === 'left' && (
                    <div className={imageSideClass}>
                        <img src={image} alt={title} className="automation-main-img" />
                    </div>
                )}
                
                <div className={contentSideClass}>
                    <h2 className="automation-title">{title}</h2>
                    <p className="automation-description">{description}</p>
                    <a href="#" className="automation-link" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
                        GET STARTED <ArrowRight size={20} />
                    </a>
                </div>

                {layout === 'right' && (
                    <div className={imageSideClass}>
                        <img src={image} alt={title} className="automation-main-img" />
                    </div>
                )}
            </div>
            
            <div className={bgPatternClass}>
                <img src={linePattern} alt="" />
            </div>
        </section>
    );
};

export default RobotProductSection;
