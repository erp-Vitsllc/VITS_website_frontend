import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { siteConfig } from '../models/siteConfig';

export const useWebsiteController = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (label) => {
        setActiveTab(label);
        setIsDrawerOpen(false);

        if (label === 'Subsidiaries') {
            navigate('/subsidiaries');
            return;
        }

        if (label === 'Contact Us') {
            navigate('/contact');
            return;
        }

        if (label === 'About Us') {
            navigate('/about-us');
            return;
        }

        if (label === 'Leadership Team') {
            navigate('/leadership');
            return;
        }

        if (label === 'Our Journey') {
            navigate('/our-journey');
            return;
        }

        if (label === 'Blog') {
            navigate('/blog');
            return;
        }

        if (label === 'Support') {
            navigate('/support');
            return;
        }

        if (label === 'Terms Of Service') {
            navigate('/terms');
            return;
        }

        // Mapping labels to IDs
        const labelToId = {
            'Home': 'home',
            'Solutions': 'solutions',
            'Industries': 'industries',
            'Partners': 'partners',
            'About Us': 'about-us',
            'Leadership Team': 'leadership',
            'Contact Us': 'contact',
            'Our Journey': 'journey',
            'Blog': 'blog',
            'Terms Of Service': 'terms',
            'Support': 'support'
        };

        const sectionId = labelToId[label] || label.toLowerCase().replace(/\s+/g, '-');

        if (location.pathname !== '/') {
            // If not on landing page, go home first
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            // On landing page, scroll directly
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (label === 'Home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const openWhatsApp = () => {
        window.open(siteConfig.contact.whatsapp, '_blank');
    };

    return {
        activeTab,
        isDrawerOpen,
        handleNavClick,
        toggleDrawer,
        openWhatsApp,
        config: siteConfig
    };
};
