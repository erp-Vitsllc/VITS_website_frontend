import React, { useEffect, useState } from 'react';
import Header from './Header';
import IoTSection from './IoTSection';
import SmartAutomationSection from './SmartAutomationSection';
import VideoAnalyticsSection from './VideoAnalyticsSection';
import Industry4Section from './Industry4Section';
import InfrastructureManagementSection from './InfrastructureManagementSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const IoTPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
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
                <IoTSection />
                <SmartAutomationSection onGetStartedClick={openModal} />
                <VideoAnalyticsSection onGetStartedClick={openModal} />
                <Industry4Section onGetStartedClick={openModal} />
                <InfrastructureManagementSection onGetStartedClick={openModal} />
                <SomethingElseSection />
            </div>
            <Footer controller={controller} />
            <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default IoTPage;
