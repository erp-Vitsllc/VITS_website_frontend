import React, { useEffect } from 'react';
import Header from './Header';
import SupportHero from './SupportHero';
import SupportForm from './SupportForm';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { useWebsiteController } from '../hooks/useWebsiteController';

const SupportPage = () => {
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
                <SupportHero />
                <SupportForm />
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default SupportPage;
