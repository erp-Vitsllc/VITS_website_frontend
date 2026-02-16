import { useState } from 'react';
import { siteConfig } from '../models/siteConfig';

export const useWebsiteController = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleNavClick = (label) => {
        setActiveTab(label);
        // Add logic for navigation or scroll if needed
    };

    const openWhatsApp = () => {
        window.open(siteConfig.contact.whatsapp, '_blank');
    };

    return {
        activeTab,
        handleNavClick,
        openWhatsApp,
        config: siteConfig
    };
};
