import React, { useEffect, useState } from 'react';
import Header from './Header';
import RoboticsHero from './RoboticsHero';
import RobotProductSection from './RobotProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const RoboticsPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const robots = [
        {
            title: "PEPER",
            description: "Pepper Humanoid Robot UAE is an advanced humanoid robot designed to interact with people and enhance customer experiences. With its ability to recognize emotions, engage in natural conversations, and perform various tasks, pepper is ideal for retail, hospitality, and service environments. Our Pepper Robot in Dubai is the best customer experience robot in Dubai It offers personalized interactions, improves customer engagement, and adds a futuristic touch to your business. Discover how Pepper can transform your customer service and operations.",
            image: "/assets/Robotics-Peper-X-1024x1024.webp",
            layout: "left"
        },
        {
            title: "TEMI",
            description: "Temi is an innovative personal robot designed to assist with everyday tasks and enhance your lifestyle. Enterprise and Personnels use Temi for office productivity Dubai. Equipped with advanced navigation, voice recognition, and interactive capabilities, temi serves as a smart assistant for home and office environments. It can manage schedules, provide information, and offer hands-free support, making daily routines more efficient and enjoyable. Experience the future of personal robotics with temi personal robotics in dubai.",
            image: "/assets/Robotics-Temi-X-1024x1024.webp",
            layout: "right"
        },
        {
            title: "DOUBLE 3",
            description: "Double 3 is a versatile remote interaction robot dubai with telepresence that brings remote interactions to life. Featuring a high-definition screen and advanced mobility, it allows users to participate in meetings, conferences, and daily activities from any location. With intuitive controls and seamless integration, double 3 enhances communication and collaboration, bridging the gap between physical and virtual presence. Experience hands free assistant robot dubai.",
            image: "/assets/Robotics-Double-3-X-1024x1024.webp",
            layout: "left"
        }
    ];

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
                <RoboticsHero />
                {robots.map((robot, index) => (
                    <RobotProductSection
                        key={index}
                        title={robot.title}
                        description={robot.description}
                        image={robot.image}
                        layout={robot.layout}
                        onGetStartedClick={openModal}
                    />
                ))}
                <SomethingElseSection />
            </div>
            <Footer controller={controller} />
            <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default RoboticsPage;
