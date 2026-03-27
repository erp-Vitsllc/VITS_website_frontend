import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FloatingScrollIndicator = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            setIsAtBottom(scrollPercent > 0.95);
            
            // Optional: Hide indicator if at the very top and very bottom and we want more 'blendable' feel?
            // For now, keep it visible
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const findNextSection = () => {
        if (isAtBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const sections = Array.from(document.querySelectorAll('section, footer'));
        const currentScroll = window.scrollY + 100; // Offset for better detection

        const nextSection = sections.find(section => section.offsetTop > currentScroll);

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If no more sections, go to bottom
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <div 
            className={`scroll-indicator floating ${isAtBottom ? 'up' : 'down'}`} 
            onClick={findNextSection}
            style={{ 
                position: 'fixed', 
                bottom: '30px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                mixBlendMode: 'difference',
                zIndex: 9999,
                color: 'white'
            }}
        >
            <div className="scroll-indicator-btn">
                {isAtBottom ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
            </div>
        </div>
    );
};

export default FloatingScrollIndicator;
