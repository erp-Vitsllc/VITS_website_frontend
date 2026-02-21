import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';

const solutions = [
    {
        title: "IoT",
        description: "Transform your operations with real time data and analytics.",
        link: "#"
    },
    {
        title: "ROBOTICS",
        description: "Step into the future with Enterprise level Robotics solution.",
        link: "#"
    },
    {
        title: "SOFTWARE",
        description: "Next Gen Software Solutions to unlock your business potential.",
        link: "#"
    },
    {
        title: "ELV",
        description: "Smart Infrastructure Management thru Innovative Integrated Systems.",
        link: "#"
    },
    {
        title: "Digital Signage System",
        description: "Digital Signage Systems that deliver real-time content to boost customer experience and visibility.",
        link: "#"
    }
];

const SolutionsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start with first item (IoT)

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % solutions.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    };

    const getCardClass = (index) => {
        if (index === currentIndex) return "solution-card active";
        if (index === (currentIndex - 1 + solutions.length) % solutions.length) return "solution-card prev";
        if (index === (currentIndex + 1) % solutions.length) return "solution-card next";
        return "solution-card hidden";
    };

    return (
        <section id="solutions" className="solutions-section">
            <div className="solutions-header">
                <h2 className="solutions-title">SOLUTION WE OFFER</h2>
            </div>

            <div className="solutions-slider-container">
                <button className="slider-arrow left" onClick={handlePrev}>
                    <ArrowLeft size={24} />
                </button>

                <div className="solutions-slider">
                    {solutions.map((item, index) => (
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

export default SolutionsSection;
