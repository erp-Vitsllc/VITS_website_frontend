import React, { useEffect, useState } from 'react';
import Header from './Header';
import MiningHero from './MiningHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const MiningPage = () => {
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

    const miningSolutions = [
        {
            title: "INTEGRATED MINING SYSTEM",
            description: "Our integrated mining system streamlines operations by combining advanced technologies for real time monitoring, data analysis, and automation. Enhance efficiency with integrated tools for resource management, equipment tracking, and safety monitoring. Our system supports improved decision-making, reduces downtime, and optimizes resource extraction processes. Transform your mining operations with a cohesive, data-driven approach to achieve better performance and sustainability.",
            image: "/assets/Integrated-Mining-Systems.webp",
            layout: "left"
        },
        {
            title: "DATA ANALYTICS",
            description: "Our data analytics solutions transform raw data into actionable insights, driving informed decision-making. With tools for data visualization, predictive modeling, and trend analysis, we help you uncover patterns, optimize performance, and forecast future outcomes. Enhance your strategy with comprehensive analytics that provide clarity and precision, empowering your business to act on data-driven insights for improved results and growth.",
            image: "/assets/Mining-Data-Analytics.webp",
            layout: "right"
        },
        {
            title: "SUPPLY CHAIN MANAGEMENT",
            description: "Our supply chain management solutions optimize every link in your supply chain, from procurement to delivery. With advanced tools for real-time tracking, inventory management, and demand forecasting, we enhance efficiency and reduce costs. Streamline logistics, improve supplier collaboration, and ensure timely deliveries with integrated solutions that boost performance and agility across your supply chain operations.",
            image: "/assets/Mining-Supply-Chain-Management-XX.webp",
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
                <MiningHero />
                {miningSolutions.map((solution, index) => (
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

export default MiningPage;
