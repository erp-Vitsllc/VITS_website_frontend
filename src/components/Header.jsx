import React from 'react';
import { Phone, Mail, Home, MessageCircle, Menu } from 'lucide-react';

const Header = ({ controller }) => {
    const logoPath = "/assets/vega-icon.png";
    const { config, activeTab, handleNavClick, openWhatsApp } = controller;

    return (
        <header className="header-wrapper">
            <div className="top-bar">
                <div className="top-bar-item">
                    <Phone size={12} />
                    <span>{config.contact.phone1}</span>
                </div>
                <div className="top-bar-item">
                    <Phone size={12} />
                    <span>{config.contact.phone2}</span>
                </div>
                <div className="top-bar-item">
                    <Mail size={12} />
                    <span>{config.contact.email}</span>
                </div>
            </div>

            <div className="main-header">
                <div
                    className="logo-container"
                    onClick={() => handleNavClick('Home')}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src={logoPath}
                        alt="VEGA Logo"
                        className="logo-img"
                    />
                </div>

                <nav className="nav-links">
                    {config.navigation.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <a
                                href="#"
                                className={`nav-link ${activeTab === item.label ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.label);
                                }}
                            >
                                {item.label === 'Home' ? <Home size={18} /> : item.label}
                            </a>
                            {index < config.navigation.length - 1 && item.label !== 'Home' && (
                                <span className="nav-separator">|</span>
                            )}
                            {item.label === 'Home' && index < config.navigation.length - 1 && (
                                <div style={{ width: '15px' }}></div>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                <div className="header-icons">
                    <button className="icon-btn whatsapp-icon" onClick={openWhatsApp}>
                        <MessageCircle size={24} />
                    </button>
                    <button className="icon-btn" onClick={controller.toggleDrawer}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
