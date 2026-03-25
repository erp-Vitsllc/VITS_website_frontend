import React, { useEffect } from 'react';
import Header from './Header';
import JourneyHero from './JourneyHero';
import JourneyTimeline from './JourneyTimeline';
import GlobalPresenceSection from './GlobalPresenceSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { useWebsiteController } from '../hooks/useWebsiteController';

const JourneyPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <JourneyHero />
                <JourneyTimeline />
                <GlobalPresenceSection />
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default JourneyPage;
