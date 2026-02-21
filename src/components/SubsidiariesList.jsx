import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const subsidiariesData = [
    {
        name: "SOLIS IT SOLUTIONS",
        logo: "/assets/solis-it-solutions-logo-large-colour.webp",
        description: "Established in Republic of Guinea, Solis IT has embarked on a journey to streamline and integrate the complex infrastructure needs of the market staying focused on technology solutions to address requirements at scale. The company navigates thru the challenges with a strong vision to promote regional development by empowering the government and youth to build and drive a digital economy in the near future.",
        link: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
    },
    {
        name: "SYSARKS TECHNOLOGY SOLUTIONS",
        logo: "/assets/sysarks-logo.webp",
        description: "Established in Bangalore, the silicon valley of India, Sysarks is at the forefront of the Digital transformation Revolution. The nerve center of all our technology development focuses on Product Engineering, Application Development, Robotics Programming, Smart Manufacturing and Industry 4.0 solutions that are designed to meet customer requirements.",
        link: "#",
        facebook: "#",
        linkedin: "#"
    },
    {
        name: "X POWER CORPORATION",
        logo: "/assets/X-Power-Corporation-Logo-1024x260-1.webp",
        description: "Established in the State of Kerala, India, X Power is rising up to the demand for energy security and sustainable energy. Thru Technological advancement and leveraging Innovation the company is contributing to environmental preservation, clean energy and significant growth opportunities. The Solar farm has a capacity to generate 20Mw clean power to the state.",
        link: "#",
        facebook: "#",
        linkedin: "#"
    }
];

const SubsidiariesList = () => {
    return (
        <div className="subsidiaries-list-container">
            {subsidiariesData.map((item, index) => (
                <div key={index} className="subsidiary-item">
                    <div className="subsidiary-logo-side">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="subsidiary-item-logo"
                        />
                    </div>
                    <div className="subsidiary-vertical-line"></div>
                    <div className="subsidiary-content-side">
                        <h3 className="subsidiary-item-title">{item.name}</h3>
                        <p className="subsidiary-item-description">{item.description}</p>

                        <a href={item.link} className="subsidiary-visit-link">
                            VISIT WEBSITE <ArrowRight size={16} />
                        </a>

                        <div className="subsidiary-item-socials">
                            {item.facebook && <a href={item.facebook} className="social-icon"><Facebook size={18} fill="currentColor" /></a>}
                            {item.instagram && <a href={item.instagram} className="social-icon"><Instagram size={18} /></a>}
                            {item.linkedin && <a href={item.linkedin} className="social-icon"><Linkedin size={18} fill="currentColor" /></a>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubsidiariesList;
