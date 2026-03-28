import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        title: 'MINING',
        description: 'State of the art mining systems to unlock and enhance new levels of productivity.',
        link: '/mining',
        image: '/assets/Vega-Digital-Mining.webp'
    },
    {
        title: 'MANUFACTURING',
        description: 'Cutting Edge Manufacturing Systems for precision and efficiency.',
        link: '/manufacturing',
        image: '/assets/manufacturing-solutions.webp'
    },
    {
        title: 'INFRASTRUCTURE',
        description: 'Seamless System Integration for complex Infrastructure operations, development and management.',
        link: '/infrastructure',
        image: '/assets/Vega-Digital-Infrastructure.webp'
    },
    {
        title: 'RETAIL',
        description: 'Enhancing customer experience and thru data driven and engaging interface systems.',
        link: '/retail',
        image: '/assets/Vega-Digital-Retail.webp'
    },
    {
        title: 'REAL ESTATE',
        description: 'Redefining Real Estate and unlocking its management thru Integrated Digital Transformation Solutions.',
        link: '/real-estate',
        image: '/assets/Vega-Digital-Real-Estate.webp'
    }
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="solutions-section industries-section">
            <div className="solutions-header">
                <h2 className="solutions-title">INDUSTRIES WE SERVE</h2>
            </div>

            <div className="solutions-grid-container">
                <div className="solutions-grid">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="solution-card"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="card-content">
                                <Link to={item.link} className="solution-card-heading-link">
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-description">{item.description}</p>
                                </Link>
                                <Link to={item.link} className="read-more">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
