import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SomethingElseSection = ({ buttonText = "SOLUTIONS WE OFFER", targetLink = "/#solutions" }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Parse targetLink to get base path and hash
        const [path, hash] = targetLink.split('#');
        
        navigate(path);
        
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <section className="something-else-section">
            <div className="something-else-container">
                <h2 className="something-else-title">LOOKING FOR SOMETHING ELSE?</h2>
                <p className="something-else-description">
                    Explore our diverse solutions and services. From advanced tech to customized software and consulting, we've got the expertise you need
                </p>
                <button className="something-else-btn" onClick={handleRedirect}>
                    {buttonText} <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default SomethingElseSection;
