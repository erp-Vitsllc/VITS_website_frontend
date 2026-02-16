import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const SocialSidebar = ({ socials }) => {
    const getIcon = (name) => {
        switch (name) {
            case 'instagram': return <Instagram size={20} />;
            case 'facebook': return <Facebook size={20} />;
            case 'linkedin': return <Linkedin size={20} />;
            default: return null;
        }
    };

    return (
        <div className="side-socials">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    {getIcon(social.icon)}
                </a>
            ))}
        </div>
    );
};

export default SocialSidebar;
