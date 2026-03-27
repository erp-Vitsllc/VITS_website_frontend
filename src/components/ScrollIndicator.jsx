import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ScrollIndicator = ({ targetId, direction = 'down' }) => {
    const handleScroll = (e) => {
        e.preventDefault();
        
        if (targetId) {
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        
        // Default scroll down one viewport if no target
        if (direction === 'down') {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="scroll-indicator" onClick={handleScroll}>
            <div className="scroll-indicator-btn">
                {direction === 'down' ? <ChevronDown size={28} /> : <ChevronUp size={28} />}
            </div>
        </div>
    );
};

export default ScrollIndicator;
