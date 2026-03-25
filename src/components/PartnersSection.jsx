import React, { useRef, useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const partners = [
    { name: 'HIKVISION', logo: '/assets/hikvision.png', facebook: 'https://www.facebook.com/HikvisionHQ/', instagram: 'https://www.instagram.com/hikvision/', linkedin: 'https://www.linkedin.com/company/hikvision/' },
    { name: 'Absen Energy', logo: '/assets/absenenery.png', facebook: 'https://www.facebook.com/absenenergy', linkedin: 'https://www.linkedin.com/company/absen-energy/' },
    { name: 'inferrix', logo: '/assets/inferrix.png', linkedin: 'https://www.linkedin.com/company/inferrix-limited/' },
    { name: 'Videonetics', logo: '/assets/videonetics.png', facebook: 'https://www.facebook.com/VideoneticsHQ/', instagram: 'https://www.instagram.com/videonetics/', linkedin: 'https://www.linkedin.com/company/videonetics/' },
    { name: 'trex', logo: '/assets/trex.png', linkedin: 'https://www.linkedin.com/company/trexmop/' },
    { name: 'ZEBRA', logo: '/assets/zebra.png', facebook: 'https://www.facebook.com/ZebraTechnologiesAPAC/', linkedin: 'https://www.linkedin.com/company/zebra-technologies/' },
];

const PartnersSection = () => {
    return (
        <section id="partners" className="partners-section">
            <div className="partners-container">
                <div className="partners-text">
                    <h2 className="partners-title">OUR PARTNERS</h2>
                    <p className="partners-description">
                        Through strategic partnerships, we transcend industry boundaries to pioneer innovative
                        solutions and groundbreaking technologies. Together we deliver unparalleled solutions on
                        a global scale. Our shared commitment to excellence and integrity fuels our collective success.
                    </p>
                </div>

                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-card">
                            <div className="partner-logo-container">
                                {/* Fallback text if logo missing */}
                                <span className="partner-placeholder-text">{partner.name}</span>
                                <img src={partner.logo} alt={partner.name} className="partner-logo-img" />
                            </div>
                            <div className="partner-info">
                                <a href="#" className="visit-website">VISIT WEBSITE</a>
                                <div className="partner-socials">
                                    {partner.facebook && partner.facebook !== '#' && <a href={partner.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>}
                                    {partner.instagram && partner.instagram !== '#' && <a href={partner.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>}
                                    {partner.linkedin && partner.linkedin !== '#' && <a href={partner.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
