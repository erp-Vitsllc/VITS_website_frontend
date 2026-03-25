import React, { useEffect, useState } from 'react';
import Header from './Header';
import ELVHero from './ELVHero';
import SolutionProductSection from './SolutionProductSection';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import CallbackModal from './CallbackModal';
import SomethingElseSection from './SomethingElseSection';
import { useWebsiteController } from '../hooks/useWebsiteController';

const ELVPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const elvSolutions = [
        {
            title: "INTELLIGENT SURVEILLANCE SYSTEM",
            description: "Our Intelligent Surveillance system with cutting edge AI Camera's, advanced analytics and edge computing provides comprehensive security and real time un-manned monitoring capabilities. From a rookie CCTV Installation Company in UAE, we have emerged as a challenger brand in security and IT solutions in UAE. Our systems are integrated and scalable to consolidate data and enhance your response to potential threat quickly.",
            image: "/assets/ELV-Survaillance-System-XY.webp",
            layout: "left"
        },
        {
            title: "ADVANCED ACCESS CONTROL",
            description: "Featuring advanced face recognition and remote access control technologies, we work with the best access control systems in Dubai and our access control solutions enhance security, control and management of facilities. Our systems are integrated for real time monitoring and ensure a safe and secure environment. Our products and services are customizable to suit our clients unique security requirements.",
            image: "/assets/ELV-Access-Control-X.webp",
            layout: "right"
        },
        {
            title: "WiFi SYSTEM",
            description: "WiFi systems are essential for both home and business environments, enabling seamless connectivity across multiple devices. We design and engineer in house Wifi Data Points solutions in UAE. Our advanced Single, Whole, Mesh, Extender WiFi Systems are designed by us based on layout, usage, coverage and speed requirements with enhanced security, easy control and customization.",
            image: "/assets/Wi-Fi-System.webp",
            layout: "left"
        },
        {
            title: "Networking",
            description: "WiFi systems are essential for both home and business environments, enabling seamless connectivity across multiple devices. We design and engineer in house Wifi Data Points solutions in UAE. Our advanced Single, Whole, Mesh, Extender WiFi Systems are designed by us based on layout, usage, coverage and speed requirements with enhanced security, easy control and customization.",
            image: "/assets/ELV-Networking-X.webp",
            layout: "right"
        },
        {
            title: "GATE BARRIER",
            description: "An essential component of modern-day security, our intelligent integrated gate barrier systems secure borders, communities, buildings and industrial infrastructure facilities. The systems enable real time monitoring and unmanned control with customized software for gate barriers in dubai, with applications enabling balance of security, convenience and safety.",
            image: "/assets/Gate-Barrier-instalaltion-in-Dubai.webp",
            layout: "left"
        },
        {
            title: "TECHNICAL SUPPORT SERVICES",
            description: "Our robust support system provide assistance to individuals and businesses for troubleshooting, maintaining, and resolving technical issues related to software, hardware, networks, Cloud and Infrastructure, Cyber Security other technology-based errors and threats. Our support team serves Proactive Maintenance, Annual Maintenance Contract, Customization and Integration of your various IT systems and Data ensuring increased productivity, Zero downtime, Cost Efficiency, Security and Compliance thru our dedicated Customer Support App.",
            image: "/assets/Vega-Techical-Support-Services.webp",
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
                <ELVHero />
                {elvSolutions.map((solution, index) => (
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

export default ELVPage;
