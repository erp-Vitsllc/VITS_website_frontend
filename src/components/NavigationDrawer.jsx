import React from 'react';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NavigationDrawer = ({ isOpen, onClose, onNavClick, config }) => {
    const location = useLocation();

    const menuItems = [
        "HOME",
        "ABOUT US",
        "LEADERSHIP TEAM",
        "OUR JOURNEY",
        "BLOG",
        "TERMS OF SERVICE",
        "SUPPORT",
        "CONTACT US"
    ];

    const getIsActive = (label) => {
        const path = location.pathname;
        if (label === 'HOME' && path === '/') return true;
        if (label === 'ABOUT US' && path === '/about-us') return true;
        if (label === 'LEADERSHIP TEAM' && path === '/leadership') return true;
        if (label === 'OUR JOURNEY' && path === '/our-journey') return true;
        if (label === 'BLOG' && path === '/blog') return true;
        if (label === 'TERMS OF SERVICE' && path === '/terms') return true;
        if (label === 'SUPPORT' && path === '/support') return true;
        if (label === 'CONTACT US' && path === '/contact') return true;
        return false;
    };

    const handleLinkClick = (e, label) => {
        e.preventDefault();
        
        // Convert to Title Case to match useWebsiteController logic
        const displayLabel = label.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

        onNavClick(displayLabel);
    };

    return (
        <div className={`navigation-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`navigation-drawer ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="drawer-close-btn" onClick={onClose}>
                    <X size={32} />
                </button>

                <div className="drawer-content">
                    <div
                        className="drawer-logo-container"
                        onClick={() => onNavClick('Home')}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src="/assets/vega-icon.png" alt="VEGA Logo" className="drawer-logo" />
                        <p className="drawer-tagline">CONNECTING THE WORLD, ONE INNOVATION AT A TIME.</p>
                    </div>

                    <nav className="drawer-nav">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`drawer-nav-link ${getIsActive(item) ? 'active' : ''}`}
                                onClick={(e) => handleLinkClick(e, item)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="drawer-socials">
                        <a href={config.socials.find(s => s.icon === 'instagram')?.url} target="_blank" rel="noopener noreferrer" className="drawer-social-icon">
                            <Instagram size={20} />
                        </a>
                        <a href={config.socials.find(s => s.icon === 'facebook')?.url} target="_blank" rel="noopener noreferrer" className="drawer-social-icon">
                            <Facebook size={20} />
                        </a>
                        <a href={config.socials.find(s => s.icon === 'linkedin')?.url} target="_blank" rel="noopener noreferrer" className="drawer-social-icon">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationDrawer;
