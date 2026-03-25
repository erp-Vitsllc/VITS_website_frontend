import React, { useEffect, useState } from 'react';
import Header from './Header';
import SoftwareHero from './SoftwareHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const SoftwarePage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const softwareSolutions = [
        {
            title: "CYBER SECURITY SOLUTIONS IN DUBA",
            description: "Our cyber security solutions in Dubai provide comprehensive protection for your digital assets. We safeguard your business with advanced threat detection, real-time monitoring, and robust data encryption. Our expert team implements multi-layered defenses to prevent cyber attacks, ensuring your sensitive information remains secure. Trust us to protect your network, data, and reputation in an increasingly digital world.",
            image: "/assets/Cyber-Security-Solutions.webp",
            layout: "left"
        },
        {
            title: "SERVER SOLUTIONS",
            description: "Advanced & Customizable Data solutions to suit the specific needs for a competitive environment is inevitable today. Whether through cloud, on-premises, hybrid models or Edge our advanced Servers and Micro Data Centre solutions provide businesses with the flexibility, security, and scalability required to support modern applications and data demands. As technologies evolve our solutions will continue to adapt to meet the challenges of big data, IoT, AI, and global connectivity.",
            image: "/assets/Server-Solution-Provider-in-UAE.webp",
            layout: "right"
        },
        {
            title: "CLOUD SERVICES",
            description: "Our service in cloud storage in dubai offer scalable and flexible solutions to meet your business needs. From data storage and backup to cloud computing and application hosting, we provide reliable and secure cloud infrastructure support. Benefit from seamless access to your resources, enhanced collaboration, and cost-effective solutions that grow with your business. Trust our cloud expertise to streamline operations, ensure data security, and drive innovation in your organization",
            image: "/assets/Softwares-Cloud-Services-X.webp",
            layout: "left"
        },
        {
            title: "BUSINESS ANALYTICS",
            description: "Our image recognition software dubai service provide actionable insights from your data, helping you make informed decisions. We offer advanced tools for performance dashboards, predictive analytics, and trend analysis. Optimize operations, enhance strategies, and drive growth with our tailored analytics solutions. Our Intelligent surveillance systems for airports offer edge computing surveillance and intelligent video analytics.",
            image: "/assets/Softwares-Business-Analytics-X.webp",
            layout: "right"
        },
        {
            title: "APPLICATION DEVELOPMENT",
            description: "We offer custom application development services in Dubai to help you achieve your business goals. Our expert team specializes in creating intuitive and scalable mobile and web applications tailored to your specific needs. From concept and design to development and deployment, we work closely with you to deliver high-quality solutions that enhance user engagement and drive business growth. Trust us to bring your ideas to life with our cutting-edge application development services.",
            image: "/assets/Application-Development-in-Dubai.webp",
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
                <SoftwareHero />
                {softwareSolutions.map((solution, index) => (
                    <SolutionProductSection
                        key={index}
                        title={solution.title}
                        description={solution.description}
                        image={solution.image}
                        layout={solution.layout}
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

export default SoftwarePage;
