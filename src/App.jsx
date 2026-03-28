import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FloatingScrollIndicator from './components/FloatingScrollIndicator';

const LandingPage = lazy(() => import('./components/LandingPage'));
const SubsidiariesPage = lazy(() => import('./components/SubsidiariesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const IoTPage = lazy(() => import('./components/IoTPage'));
const RoboticsPage = lazy(() => import('./components/RoboticsPage'));
const SoftwarePage = lazy(() => import('./components/SoftwarePage'));
const ELVPage = lazy(() => import('./components/ELVPage'));
const InfrastructurePage = lazy(() => import('./components/InfrastructurePage'));
const RetailPage = lazy(() => import('./components/RetailPage'));
const RealEstatePage = lazy(() => import('./components/RealEstatePage'));
const MiningPage = lazy(() => import('./components/MiningPage'));
const ManufacturingPage = lazy(() => import('./components/ManufacturingPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const LeadershipPage = lazy(() => import('./components/LeadershipPage'));
const JourneyPage = lazy(() => import('./components/JourneyPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogDetailAV = lazy(() => import('./components/BlogDetailAV'));
const BlogDetailCCTV = lazy(() => import('./components/BlogDetailCCTV'));
const BlogDetailELV = lazy(() => import('./components/BlogDetailELV'));
const BlogDetailAccessControl = lazy(() => import('./components/BlogDetailAccessControl'));
const BlogDetailELVvsTraditional = lazy(() => import('./components/BlogDetailELVvsTraditional'));
const BlogDetailELVSecurityFit = lazy(() => import('./components/BlogDetailELVSecurityFit'));
const BlogDetailSmartELVResidential = lazy(() => import('./components/BlogDetailSmartELVResidential'));
const BlogDetailSIRACompliance = lazy(() => import('./components/BlogDetailSIRACompliance'));
const BlogDetailVideoConference = lazy(() => import('./components/BlogDetailVideoConference'));
const SupportPage = lazy(() => import('./components/SupportPage'));
const TermsPage = lazy(() => import('./components/TermsPage'));

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
            <Suspense fallback={null}>
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
            </Suspense>
        </Router>
    );
}

export default App;
