import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const timelineData = [
    {
        year: "2016",
        location: "SHARJAH",
        description: "Vega Digital Systems makes a humble beginning with a 2 member team with aspirations to become a leading Security Systems company in UAE.",
        image: "/assets/Sharjah.webp"
    },
    {
        year: "2018",
        location: "DUBAI",
        description: "The company is rebranded to today's Vega Digital IT Solutions and is now a challenger brand in the ELV Industry.",
        image: "/assets/Dubai.webp"
    },
    {
        year: "2021",
        location: "BANGALORE",
        description: "Moves east and establishes in house Software Development Capabilities in technologies to deliver Innovative Integrated Solutions.",
        image: "/assets/Banglore.webp"
    },
    {
        year: "2023",
        location: "REPUBLIC OF GUINEA",
        description: "Moves west to build a digital infrastructure and economy empowering the government and youth for a connected future.",
        image: "/assets/Conakry.webp"
    },
    {
        year: "2024",
        location: "KOCHI",
        description: "Technology partner for the 20Mw Solar power plant to meet clean energy demands and contribute to a sustainable planet.",
        image: "/assets/Kochi.webp"
    },
    {
        year: "2024",
        location: "ABU DHABI",
        description: "Establishes branch in the national capital. The rising demand for IT infrastructure drives growth and innovation.",
        image: "/assets/Abu-Dhabi-Skyline.webp"
    }
];

const JourneyTimeline = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const linePattern = "/assets/Lines-3.webp";
    
    const visibleCount = 3;
    const maxIndex = timelineData.length - visibleCount;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="journey-section">
             <div className="leadership-bg-pattern">
                <img src={linePattern} alt="" />
            </div>

            <div className="journey-timeline-container">
                <div className="slider-nav">
                    <button 
                        className={`journey-arrow ${currentIndex === 0 ? 'disabled' : ''}`} 
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft size={48} />
                    </button>
                    <button 
                        className={`journey-arrow ${currentIndex === maxIndex ? 'disabled' : ''}`} 
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>

                <div className="timeline-slider-wrapper">
                    <div 
                        className="timeline-slider" 
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                    >
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-card-image">
                                    <img src={item.image} alt={item.location} />
                                </div>
                                <div className="timeline-marker-row">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-dot">
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h3 className="timeline-location">{item.location}</h3>
                                    <p className="timeline-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyTimeline;
