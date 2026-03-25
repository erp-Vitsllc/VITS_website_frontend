import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
    {
        title: "IoT",
        description: "Transform your operations with real time data and analytics.",
        link: "/iot",
        image: "/assets/Vega-Digital-IoT.webp"
    },
    {
        title: "ROBOTICS",
        description: "Step into the future with Enterprise level Robotics solution.",
        link: "/robotics",
        image: "/assets/Vega-Digital-Robotics.webp"
    },
    {
        title: "SOFTWARE",
        description: "Next Gen Software Solutions to unlock your business potential.",
        link: "/software",
        image: "/assets/Vega-Digital-Software-Development.webp"
    },
    {
        title: "ELV",
        description: "Smart Infrastructure Management thru Innovative Integrated Systems.",
        link: "/elv",
        image: "/assets/Vega-Digital-ELV.webp"
    },
    {
        title: "Digital Signage System",
        description: "Digital Signage Systems that deliver real-time content to boost customer experience and visibility.",
        link: "#",
        image: "/assets/Digtial-Signage-System.webp"
    }
];

const SolutionsSection = () => {
    return (
        <section id="solutions" className="solutions-section">
            <div className="solutions-header">
                <h2 className="solutions-title">SOLUTION WE OFFER</h2>
            </div>

            <div className="solutions-grid-container">
                <div className="solutions-grid">
                    {solutions.map((item, index) => (
                        <Link key={index} 
                            to={item.link}
                            className="solution-card"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                textDecoration: 'none'
                            }}
                        >
                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-description">{item.description}</p>
                                <span className="read-more">
                                    Read More <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
