import React, { useEffect, useState } from 'react';
import Header from './Header';
import InfrastructureHero from './InfrastructureHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const InfrastructurePage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const infraSolutions = [
        {
            title: "AIRPORT",
            description: "The dynamic nature of this infrastructure requires complex monitoring systems and analytics for swift action against any threats. Our Intelligent surveillance systems is capable of providing detailed insight on movable and immovable objects or people with advanced computing and analytics.",
            image: "/assets/Infrastructure-Airport-X (1).webp",
            layout: "left"
        },
        {
            title: "PORT",
            description: "Our software solutions are integrated has the capability to integrate with Port management systems delivering real time data of commodity movements towards an awaiting vessel enabling efficient operations planning and optimization of resources, space and time.",
            image: "/assets/Port-Managemet-Systems.webp",
            layout: "right"
        },
        {
            title: "SUSTAINABLE ENERGY GENERATION",
            description: "Meeting energy demands is one of the most challenging issues faced by governments worldwide and generating clean energy for a sustainable future is a global objective. Our uniquely designed solar plant plans to produce and transmit 20mw of round the clock energy using industrial scale battery storage solutions.",
            image: "/assets/Infrastructure-Sustainable-Energy-Generation-X.webp",
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
                <InfrastructureHero />
                {infraSolutions.map((solution, index) => (
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

export default InfrastructurePage;
