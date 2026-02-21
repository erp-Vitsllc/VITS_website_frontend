import React from 'react';
import { X, Instagram, Facebook, Linkedin } from 'lucide-react';

const NavigationDrawer = ({ isOpen, onClose, onNavClick, config }) => {
    const menuItems = [
        "HOME",
        "ABOUT US",
        "LEADERSHIP TEAM",
        "OUR JOURNEY",
        "LATEST NEWS",
        "SUPPORT",
        "CONTACT US",
        "SOLUTIONS",
        "INDUSTRIES",
        "SUBSIDIARIES",
        "PARTNERS"
    ];

    // Map labels to config label if they exist, or use as is
    const handleLinkClick = (e, label) => {
        e.preventDefault();
        // Capitalize only first letter for matching controller logic if needed, 
        // but current logic uses lowercase conversion so it's fine.
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
                                className={`drawer-nav-link ${item === 'HOME' ? 'active' : ''}`}
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
