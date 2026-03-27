import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import BlogDetailAV from './components/BlogDetailAV';
import BlogDetailCCTV from './components/BlogDetailCCTV';
import BlogDetailELV from './components/BlogDetailELV';
import BlogDetailAccessControl from './components/BlogDetailAccessControl';
import BlogDetailELVvsTraditional from './components/BlogDetailELVvsTraditional';
import BlogDetailELVSecurityFit from './components/BlogDetailELVSecurityFit';
import BlogDetailSmartELVResidential from './components/BlogDetailSmartELVResidential';
import BlogDetailSIRACompliance from './components/BlogDetailSIRACompliance';
import BlogDetailVideoConference from './components/BlogDetailVideoConference';
import FloatingScrollIndicator from './components/FloatingScrollIndicator';
import SupportPage from './components/SupportPage';
import TermsPage from './components/TermsPage';

// ScrollToTop component to reset scroll position on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <FloatingScrollIndicator />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/leadership" element={<LeadershipPage />} />
                <Route path="/our-journey" element={<JourneyPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/advanced-av-solutions" element={<BlogDetailAV />} />
                <Route path="/blog/why-your-cctv-installation-company-choice-matters" element={<BlogDetailCCTV />} />
                <Route path="/blog/elv-system-implementation-mistakes" element={<BlogDetailELV />} />
                <Route path="/blog/access-control-system-dubai" element={<BlogDetailAccessControl />} />
                <Route path="/blog/elv-system-vs-traditional-infrastructure" element={<BlogDetailELVvsTraditional />} />
                <Route path="/blog/elv-and-security-solutions-best-fit" element={<BlogDetailELVSecurityFit />} />
                <Route path="/blog/smart-elv-improves-safety-and-efficiency" element={<BlogDetailSmartELVResidential />} />
                <Route path="/blog/sira-approved-compliance-checklist-uae" element={<BlogDetailSIRACompliance />} />
                <Route path="/blog/video-conference-solutions-transform-communication" element={<BlogDetailVideoConference />} />
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
