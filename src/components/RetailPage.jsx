import React, { useEffect, useState } from 'react';
import Header from './Header';
import RetailHero from './RetailHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const RetailPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const retailSolutions = [
        {
            title: "CUSTOMER EXPERIENCE",
            description: "Our solutions enhance customer experience by delivering personalized interactions and seamless service. We utilize advanced analytics and automation to understand customer preferences, streamline communication, and resolve issues quickly. From tailored recommendations to responsive support, our technology ensures a positive and memorable experience at every touch point, driving satisfaction and loyalty. Transform how you engage with customers for lasting success.",
            image: "/assets/Retail-Customer-Expereince-X.webp",
            layout: "left"
        },
        {
            title: "BUSINESS ANALYTICS",
            description: "Our business analytics solutions provide deep insights into your operations, helping you make data-driven decisions. With advanced tools for real-time reporting, predictive analytics, and trend analysis, we turn complex data into actionable strategies. Enhance performance, optimize processes, and drive growth by understanding key metrics and patterns. Empower your business with clear, comprehensive analytics to stay ahead in a competitive market.",
            image: "/assets/Retail-Business-Analytics.webp",
            layout: "right"
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
                <RetailHero />
                {retailSolutions.map((solution, index) => (
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

export default RetailPage;
