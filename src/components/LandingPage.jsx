import React from 'react';
import Header from './Header';
import Hero from './Hero';
import SocialSidebar from './SocialSidebar';
import NavigationDrawer from './NavigationDrawer';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import SolutionsSection from './SolutionsSection';
import IndustriesSection from './IndustriesSection';
import PartnersSection from './PartnersSection';
import GlobalPresenceSection from './GlobalPresenceSection';
import Footer from './Footer';
import { useWebsiteController } from '../hooks/useWebsiteController';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const location = useLocation();

    React.useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Clear state to prevent scrolling again on refresh
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <div className="main-scroll-container">
            <Header controller={controller} />
            <NavigationDrawer
                isOpen={isDrawerOpen}
                onClose={toggleDrawer}
                onNavClick={handleNavClick}
                config={config}
            />
            <div className="app-container">
                <Hero config={config} />
                <SocialSidebar socials={config.socials} />
            </div>
            <AboutSection />
            <StatsSection />
            <SolutionsSection />
            <IndustriesSection />
            <PartnersSection />
            <GlobalPresenceSection />
            <Footer controller={controller} />
        </div>
    );
};

export default LandingPage;
