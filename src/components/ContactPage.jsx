import React, { useEffect } from 'react';
import Header from './Header';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { useWebsiteController } from '../hooks/useWebsiteController';

const ContactPage = () => {
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
                <ContactSection />
                <ContactForm config={config} />
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default ContactPage;
