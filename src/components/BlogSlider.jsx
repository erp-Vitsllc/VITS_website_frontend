import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const blogData = [
    {
        title: "TRANSFORM YOUR BUSINESS OPERATIONS WITH ADVANCED AV SOLUTIONS",
        date: "22 Dec",
        image: "/assets/Transform_Your_Business_Operations_Hero_Image-480x320.webp"
    },
    {
        title: "WHY YOUR CCTV INSTALLATION COMPANY CHOICE MATTERS FOR SECURITY",
        date: "19 Dec",
        image: "/assets/Why_Your_CCTV_Installation_Company_Choice_Matters_Hero_Image-480x320.webp"
    },
    {
        title: "ELV SYSTEM FOR BUILDINGS IN UAE: KEY MISTAKES TO AVOID DURING IMPLEMENTATION",
        date: "27 Jan",
        image: "/assets/ELV_System_for_Buildings_in_UAE_Hero_Image-480x320.webp"
    },
    {
        title: "ACCESS CONTROL SYSTEM DUBAI: NEXT-GEN SECURITY FOR BUSINESSES",
        date: "22 Jan",
        image: "/assets/Access_Control_System_Dubai_Hero_Image-480x320.webp"
    },
    {
        title: "ELV SYSTEM VS TRADITIONAL INFRASTRUCTURE: CHOOSING THE RIGHT SOLUTION FOR YOUR BUSINESS",
        date: "20 Jan",
        image: "/assets/ELV_System_vs_Traditional_Infrastructure_Hero_Image-480x320.webp"
    },
    {
        title: "ELV AND SECURITY SOLUTIONS: CHOOSING THE BEST FIT FOR YOUR COMPANY",
        date: "19 Jan",
        image: "/assets/ELV_and_Security_Systems_Hero_Image-480x320.webp"
    },
    {
        title: "SMART ELV SYSTEM IMPROVES SAFETY & EFFICIENCY IN RESIDENTIAL COMPLEXES",
        date: "13 Jan",
        image: "/assets/How_Smart_ELV_System_Improves_Safety-_Hero_Image-480x320.webp"
    },
    {
        title: "SIRA APPROVED COMPLIANCE CHECKLIST FOR UAE | WHAT TO REMEMBER?",
        date: "9 Jan",
        image: "/assets/SIRA_Compliance_Checklist_Hero_Image-480x320.webp"
    },
    {
        title: "VIDEO CONFERENCE SOLUTIONS CAN TRANSFORM COMMUNICATION",
        date: "23 Dec",
        image: "/assets/Transform_Communication_Hero_Image-480x320.webp"
    }
];

const BlogSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);
    
    const visibleCount = 3;
    const totalItems = blogData.length;
    const maxIndex = totalItems - visibleCount;

    const startTimer = () => {
        stopTimer();
        timerRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 4000); 
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        if (!isPaused) {
            startTimer();
        } else {
            stopTimer();
        }
        return () => stopTimer();
    }, [isPaused, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="blog-section" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
             <div className="leadership-bg-pattern">
                <img src={linePattern} alt="" />
            </div>

            <div className="blog-slider-container">
                <div className="blog-nav">
                    <button className="blog-arrow" onClick={prevSlide}>
                        <ChevronLeft size={60} strokeWidth={1} />
                    </button>
                    <button className="blog-arrow" onClick={nextSlide}>
                        <ChevronRight size={60} strokeWidth={1} />
                    </button>
                </div>

                <div className="blog-slider-wrapper">
                    <div 
                        className="blog-slider" 
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                    >
                        {blogData.map((blog, index) => (
                            <div key={index} className="blog-card">
                                <div className="blog-card-image-wrapper">
                                    <div className="blog-date-tag">{blog.date}</div>
                                    <img src={blog.image} alt={blog.title} className="blog-card-image" />
                                </div>
                                <h3 className="blog-card-title">{blog.title}</h3>
                                <a href="#" className="blog-read-more" onClick={(e) => e.preventDefault()}>
                                    READ MORE <ArrowRight size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSlider;
