import React, { useEffect, useState } from 'react';
import Header from './Header';
import ManufacturingHero from './ManufacturingHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const ManufacturingPage = () => {
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

    const manufacturingSolutions = [
        {
            title: "MANUFACTURING EXECUTION SOFTWARE",
            description: "Our manufacturing execution software enhances production efficiency by providing real-time visibility and control over your manufacturing operations. Streamline workflows, monitor performance, and manage resources effectively with integrated tools for scheduling, quality control, and data analysis. Our MES solutions help you optimize production processes, reduce downtime, and ensure consistent product quality, driving overall operational excellence.",
            image: "/assets/Manufacturing-Execution-Software-X.webp",
            layout: "left"
        },
        {
            title: "DEEP LEARNING MACHINE SOFTWARE",
            description: "Our deep learning machine software leverages advanced algorithms to analyze complex data patterns and drive intelligent decision-making. By utilizing neural networks and artificial intelligence, it delivers accurate predictions, enhances data insights, and automates complex tasks. Ideal for applications in image recognition, natural language processing, and predictive analytics, our software transforms data into actionable insights, powering innovation and efficiency across various industries.",
            image: "/assets/Deep-Learning-Machine-Software.webp",
            layout: "right"
        },
        {
            title: "WAREHOUSE MANAGEMENT SYSTEM",
            description: "Our warehouse management system optimizes inventory management and streamlines warehouse operations. With real-time tracking, automated stock updates, and efficient order processing, our WMS enhances accuracy and reduces operational costs. Integrate seamlessly with your existing systems to improve inventory visibility, speed up order fulfillment, and boost overall efficiency. Transform your warehouse into a high performance hub with our advanced management solutions.",
            image: "/assets/Warehouse-Management-System-X.webp",
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
                <ManufacturingHero />
                {manufacturingSolutions.map((solution, index) => (
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

export default ManufacturingPage;
