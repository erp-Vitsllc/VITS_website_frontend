import React, { useEffect, useState } from 'react';
import Header from './Header';
import LeadershipHero from './LeadershipHero';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useWebsiteController } from '../hooks/useWebsiteController';

const teamMembers = [
    {
        name: "RASEEL MUHAMMAD",
        role: "Founder & CEO",
        photo: "/assets/Raseel-Muhammad-2-300x300.webp",
        linkedin: "https://www.linkedin.com/in/raseel-muhammad/"
    },
    {
        name: "BINOOSHA NAMBIAR",
        role: "Head of Operations",
        photo: "/assets/Binoosha-Nambiar-1-300x300.webp",
        linkedin: "https://www.linkedin.com/in/binoosha-nambiar/"
    },
    {
        name: "GANESH KUMAR",
        role: "Account Manager",
        photo: "/assets/Ganesh-Kumar-300x300.webp",
        linkedin: "https://www.linkedin.com/in/ganesh-kumar/"
    },
    {
        name: "NAJUMUDEEN B",
        role: "Technical Services Manager",
        photo: "/assets/Najmudeen-B-300x300.webp",
        linkedin: "https://www.linkedin.com/in/najumudeen-b/"
    },
    {
        name: "VISHNU PRASAD",
        role: "Traffic Manager",
        photo: "/assets/Vishnu-Prasad-300x300.webp",
        linkedin: "https://www.linkedin.com/in/vishnu-prasad/"
    },
    {
        name: "VISHWANATH VHATKAR",
        role: "Tech Lead",
        photo: "/assets/Vishwanath-Whatkar-300x300.webp",
        linkedin: "https://www.linkedin.com/in/vishwanath-whatkar/"
    },
    {
        name: "ZAHEER AHMED",
        role: "Project Manager",
        photo: "/assets/Zaheer-Ahmed-300x300.webp",
        linkedin: "https://www.linkedin.com/in/zaheer-ahmed/"
    }
];

const LeadershipPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const linePattern = "/assets/Lines-3.webp";

    const slideCount = teamMembers.length;
    const visibleItems = 4;
    const maxIndex = Math.max(0, slideCount - visibleItems);

    const nextSlide = () => currentIndex < maxIndex && setCurrentIndex(currentIndex + 1);
    const prevSlide = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

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
                <LeadershipHero />
                
                <section className="leadership-section">
                    <div className="leadership-bg-pattern">
                        <img src={linePattern} alt="" />
                    </div>
                    
                    <h2 className="leadership-title">INNOVATORS AND CHALLENGERS BEHIND US</h2>
                    
                    <div className="team-grid-container" style={{ position: 'relative', overflow: 'hidden', padding: '0 40px' }}>
                        {currentIndex > 0 && (
                            <button className="slider-btn left" onClick={prevSlide} style={{ position: 'absolute', left: 0, top: '40%', zIndex: 10, background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                                <ChevronLeft size={48} />
                            </button>
                        )}
                        
                        <div className="team-grid" style={{ 
                            display: 'flex', 
                            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
                            transform: `translateX(-${currentIndex * (100 / teamMembers.length)}%)`,
                            width: `${(teamMembers.length / visibleItems) * 100}%`,
                            gap: 0
                        }}>
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-card" style={{ flex: '0 0 auto', width: `${100 / teamMembers.length}%`, padding: '0 15px' }}>
                                    <div className="team-photo-wrapper">
                                        <img src={member.photo} alt={member.name} className="team-photo" />
                                    </div>
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin">
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            ))}
                        </div>

                        {currentIndex < maxIndex && (
                            <button className="slider-btn right" onClick={nextSlide} style={{ position: 'absolute', right: 0, top: '40%', zIndex: 10, background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                                <ChevronRight size={48} />
                            </button>
                        )}
                    </div>
                </section>
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default LeadershipPage;
