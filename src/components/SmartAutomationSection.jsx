import React from 'react';
import { ArrowRight } from 'lucide-react';

const SmartAutomationSection = ({ onGetStartedClick }) => {
    const mainImage = "/assets/Home-Automation-in-Dubai.webp";
    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="smart-automation-section">
            <div className="automation-container">
                <div className="automation-image-side">
                    <img src={mainImage} alt="Smart Automation" className="automation-main-img" />
                </div>
                <div className="automation-content-side">
                    <h2 className="automation-title">SMART AUTOMATION SYSTEMS - HOME/OFFICE</h2>
                    <p className="automation-description">
                        WE ARE A ONE STOP SERVE FOR SMART HOME SOLUTIONS IN UAE. WE ARE ALSO THE LEADING OFFICE AUTOMATION COMPANY IN DUBAI. WHETHER AN OFFICE SPACE OR HOME OUR SMART PRODUCTS AND SYSTEMS CONNECTS YOUR DEVICES TO A SINGLE CUSTOMIZED APPLICATION, OUR AUTOMATIONS SOLUTIONS OFFER CONVENIENCE, ENERGY EFFICIENCY, CONTROL & COMFORT BY SEAMLESSLY INTEGRATING YOUR SMARTPHONE OR TABLET FOR A MORE ENJOYABLE EXPERIENCE FROM ANYWHERE.
                    </p>
                    <a href="#" className="automation-link" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
                        GET STARTED <ArrowRight size={20} />
                    </a>
                </div>
            </div>
            {/* Background line pattern */}
            <div className="automation-bg-pattern">
                <img src={linePattern} alt="" />
            </div>
        </section>
    );
};

export default SmartAutomationSection;
