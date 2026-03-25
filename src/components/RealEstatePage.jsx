import React, { useEffect, useState } from 'react';
import Header from './Header';
import RealEstateHero from './RealEstateHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const RealEstatePage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const realEstateSolutions = [
        {
            title: "CONSTRUCTION MANAGEMENT",
            description: "Our construction management solutions streamline project planning, execution, and oversight with cutting-edge technology. From real-time project tracking and resource management to budget control and risk assessment, we offer tools that enhance efficiency and collaboration. Optimize construction processes, ensure timely delivery, and manage costs effectively with our integrated solutions designed to support every phase of your construction projects.",
            image: "/assets/Real-Estate-Construction-Management-X.webp",
            layout: "left"
        },
        {
            title: "SURVEILLANCE SYSTEM",
            description: "Our surveillance system offers comprehensive security solutions with high-definition cameras, real-time monitoring, and advanced analytics. Enhance safety with features like motion detection, facial recognition, and remote access, ensuring you stay informed and protected around the clock. Our system is designed for scalability, so it grows with your needs, providing reliable surveillance and peace of mind for both residential and commercial properties.",
            image: "/assets/Real-Estate-Surveillance-System.webp",
            layout: "right"
        },
        {
            title: "ENERGY MANAGEMENT",
            description: "Our energy management solutions optimize energy usage and reduce costs with advanced monitoring and control technologies. From real-time energy tracking to automated adjustments and predictive analytics, our system enhances efficiency and sustainability. Manage energy consumption, identify savings opportunities, and ensure regulatory compliance with our comprehensive tools designed to improve your energy performance and support environmental goals.",
            image: "/assets/Real-Estate-Energy-Management-X.webp",
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
                <RealEstateHero />
                {realEstateSolutions.map((solution, index) => (
                    <SolutionProductSection
                        key={index}
                        title={solution.title}
                        description={solution.description}
                        image={solution.image}
                        layout={solution.layout}
                        onGetStartedClick={openModal}
                    />
                ))}
                <SomethingElseSection 
                    buttonText="INDUSTRIES WE SERVE" 
                    targetLink="/#industries" 
                />
            </div>
            <Footer controller={controller} />
            <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default RealEstatePage;
