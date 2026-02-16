import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const industries = [
    {
        title: "MINING",
        description: "State of the art mining systems to unlock and enhance new levels of productivity.",
        link: "#"
    },
    {
        title: "MANUFACTURING",
        description: "Cutting Edge Manufacturing Systems for precision and efficiency.",
        link: "#"
    },
    {
        title: "INFRASTRUCTURE",
        description: "Seamless System Integration for complex Infrastructure operations, development and management.",
        link: "#"
    },
    {
        title: "RETAIL",
        description: "Enhancing customer experience and thru data driven and engaging interface systems.",
        link: "#"
    },
    {
        title: "REAL ESTATE",
        description: "Redefining Real Estate and unlocking its management thru Integrated Digital Transformation Solutions.",
        link: "#"
    }
];

const IndustriesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % industries.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
    };

    const getCardClass = (index) => {
        if (index === currentIndex) return "solution-card active";
        if (index === (currentIndex - 1 + industries.length) % industries.length) return "solution-card prev";
        if (index === (currentIndex + 1) % industries.length) return "solution-card next";
        return "solution-card hidden";
    };

    return (
        <section className="solutions-section industries-section">
            <div className="solutions-header">
                <h2 className="solutions-title">INDUSTRIES WE SERVE</h2>
            </div>

            <div className="solutions-slider-container">
                <button className="slider-arrow left" onClick={handlePrev}>
                    <ArrowLeft size={24} />
                </button>

                <div className="solutions-slider">
                    {industries.map((item, index) => (
                        <div key={index} className={getCardClass(index)}>
                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-description">{item.description}</p>
                                <a href={item.link} className="read-more">
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider-arrow right" onClick={handleNext}>
                    <ArrowRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default IndustriesSection;
