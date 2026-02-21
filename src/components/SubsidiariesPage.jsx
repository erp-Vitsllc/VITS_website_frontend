import React, { useEffect } from 'react';
import Header from './Header';
import SubsidiariesSection from './SubsidiariesSection';
import SubsidiariesList from './SubsidiariesList';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { useWebsiteController } from '../hooks/useWebsiteController';

const SubsidiariesPage = () => {
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
                <SubsidiariesSection />
                <SubsidiariesList />
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default SubsidiariesPage;
