import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SubsidiariesPage from './components/SubsidiariesPage';
import ContactPage from './components/ContactPage';
import IoTPage from './components/IoTPage';
import RoboticsPage from './components/RoboticsPage';
import SoftwarePage from './components/SoftwarePage';
import ELVPage from './components/ELVPage';
import InfrastructurePage from './components/InfrastructurePage';
import RetailPage from './components/RetailPage';
import RealEstatePage from './components/RealEstatePage';
import MiningPage from './components/MiningPage';
import ManufacturingPage from './components/ManufacturingPage';
import AboutPage from './components/AboutPage';
import LeadershipPage from './components/LeadershipPage';
import JourneyPage from './components/JourneyPage';
import BlogPage from './components/BlogPage';
import SupportPage from './components/SupportPage';
import TermsPage from './components/TermsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/leadership" element={<LeadershipPage />} />
                <Route path="/our-journey" element={<JourneyPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/subsidiaries" element={<SubsidiariesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/iot" element={<IoTPage />} />
                <Route path="/robotics" element={<RoboticsPage />} />
                <Route path="/software" element={<SoftwarePage />} />
                <Route path="/elv" element={<ELVPage />} />
                <Route path="/infrastructure" element={<InfrastructurePage />} />
                <Route path="/retail" element={<RetailPage />} />
                <Route path="/real-estate" element={<RealEstatePage />} />
                <Route path="/mining" element={<MiningPage />} />
                <Route path="/manufacturing" element={<ManufacturingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
