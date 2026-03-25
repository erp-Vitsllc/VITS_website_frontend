import React, { useEffect, useState } from 'react';
import Header from './Header';
import AboutHero from './AboutHero';
import SolutionProductSection from './SolutionProductSection';
import GlobalPresenceSection from './GlobalPresenceSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import { useWebsiteController } from '../hooks/useWebsiteController';

const AboutPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="main-scroll-container">
            <Header controller={controller} />
            <NavigationDrawer
                isOpen={isDrawerOpen}
                onClose={toggleDrawer}
                onNavClick={handleNavClick}
                config={config}
            />
            <div className="page-content-wrapper">
                <AboutHero />
                <SolutionProductSection 
                    title="LETS INVENT TOMORROW..."
                    description="At Vega Digital, we are committed to shaping the future and enhancing the quality of customer experience with our advanced technology and designs. Our Innovative solutions in ELV, IoT, Robotics and Software Applications are designed to create a smarter, more sustainable world. Join us as we lead the way towards a connected tomorrow."
                    image="/assets/Vega-00003.webp"
                    layout="right"
                    ctaText="CONTACT US"
                    variant="light"
                    onGetStartedClick={() => handleNavClick('Contact Us')}
                />
                <SolutionProductSection 
                    title="THE INNOVATORS REDEFINING OUR FUTURE"
                    description="The leadership team at Vega Digital are visionaries with diverse expertise and a shared commitment to driving the company's mission and vision forward. With innovative thinking and a deep passion for technology they steer the company to new heights and ensure that we remain at the forefront of our industry"
                    image="/assets/Vega-00004.webp"
                    layout="left"
                    ctaText="LEADERSHIP TEAM"
                    variant="light"
                    onGetStartedClick={() => handleNavClick('Leadership Team')}
                />
                <GlobalPresenceSection />
            </div>
            <Footer controller={controller} />
            <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default AboutPage;
