import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import SolutionsSection from './components/SolutionsSection';
import IndustriesSection from './components/IndustriesSection';
import PartnersSection from './components/PartnersSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';
import Footer from './components/Footer';
import { useWebsiteController } from './hooks/useWebsiteController';

function App() {
    const controller = useWebsiteController();
    const { config } = controller;

    return (
        <div className="main-scroll-container">
            <Header controller={controller} />
            <div className="app-container">
                <Hero config={config} />
                <SocialSidebar socials={config.socials} />
            </div>
            <AboutSection />
            <StatsSection />
            <SolutionsSection />
            <IndustriesSection />
            <PartnersSection />
            <GlobalPresenceSection />
            <Footer />
        </div>
    );
}

export default App;
