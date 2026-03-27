import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const BlogGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Two rows with 3 blogs each
    
    // Logic for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);
    
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Smoothly scroll to the start of the blog grid section
        const section = document.querySelector('.blog-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const linePattern = "/assets/Lines-3.webp";

    return (
        <section className="blog-section">
             <div className="leadership-bg-pattern">
                <img src={linePattern} alt="" />
            </div>

            <div className="blog-grid-container">
                <div className="blog-grid-wrapper">
                    {currentItems.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-card-image-wrapper">
                                <div className="blog-date-tag">{blog.date}</div>
                                <img src={blog.image} alt={blog.title} className="blog-card-image" />
                            </div>
                            <h3 className="blog-card-title">{blog.title}</h3>
                            <Link 
                                to={
                                    currentPage === 1 && index === 0 ? "/blog/advanced-av-solutions" : 
                                    currentPage === 1 && index === 1 ? "/blog/why-your-cctv-installation-company-choice-matters" : 
                                    currentPage === 1 && index === 2 ? "/blog/elv-system-implementation-mistakes" : 
                                    currentPage === 1 && index === 3 ? "/blog/access-control-system-dubai" : 
                                    currentPage === 1 && index === 4 ? "/blog/elv-system-vs-traditional-infrastructure" : 
                                    currentPage === 1 && index === 5 ? "/blog/elv-and-security-solutions-best-fit" : 
                                    currentPage === 2 && index === 0 ? "/blog/smart-elv-improves-safety-and-efficiency" : 
                                    currentPage === 2 && index === 1 ? "/blog/sira-approved-compliance-checklist-uae" : 
                                    currentPage === 2 && index === 2 ? "/blog/video-conference-solutions-transform-communication" : "#"
                                } 
                                className="blog-read-more"
                                onClick={(e) => {
                                    const isLinked = (currentPage === 1 && index <= 5) || (currentPage === 2 && index <= 2);
                                    if (!isLinked) e.preventDefault();
                                }}
                            >
                                READ MORE <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="blog-pagination">
                        <button 
                            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        
                        <button 
                            className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogGrid;
