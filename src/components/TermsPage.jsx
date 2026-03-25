import React, { useEffect } from 'react';
import Header from './Header';
import TermsHero from './TermsHero';
import TermsContent from './TermsContent';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { useWebsiteController } from '../hooks/useWebsiteController';

const TermsPage = () => {
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
                <TermsHero />
                <TermsContent />
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default TermsPage;
