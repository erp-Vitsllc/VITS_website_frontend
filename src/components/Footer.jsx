import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: "TRANSFORM YOUR BUSINESS OPERATIONS WITH ADVANCED AV SOLUTIONS",
        date: "22 DEC",
        image: "/assets/Transform_Your_Business_Operations_Hero_Image-480x320.webp"
    },
    {
        title: "WHY YOUR CCTV INSTALLATION COMPANY CHOICE MATTERS FOR SECURITY",
        date: "19 DEC",
        image: "/assets/Why_Your_CCTV_Installation_Company_Choice_Matters_Hero_Image-480x320.webp"
    },
    {
        title: "ELV SYSTEM FOR BUILDINGS IN UAE: KEY MISTAKES TO AVOID DURING IMPLEMENTATION",
        date: "27 JAN",
        image: "/assets/ELV_System_for_Buildings_in_UAE_Hero_Image-480x320.webp"
    },
    {
        title: "ACCESS CONTROL SYSTEM DUBAI: NEXT-GEN SECURITY FOR BUSINESSES",
        date: "22 JAN",
        image: "/assets/Access_Control_System_Dubai_Hero_Image-480x320.webp"
    }
];

const quickLinks = [
    "ABOUT US", "LEADERSHIP TEAM", "OUR JOURNEY", "CONTACT US", "BLOG", "TERMS OF SERVICE"
];

const Footer = ({ controller }) => {
    const handleLinkClick = (e, label) => {
        e.preventDefault();
        // Format label to Title Case for controller consistency
        const formattedLabel = label.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        controller.handleNavClick(formattedLabel);
    };

    return (
        <footer className="site-footer">
            <div className="footer-separator-line"></div>
            <div className="footer-container">
                {/* Blogs Section */}
                <div className="footer-blogs-section">
                    <h2 className="footer-section-title">BLOGS</h2>
                    <div className="blogs-grid">
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog-item">
                                <div className="blog-thumb">
                                    <img src={blog.image} alt="Blog Thumbnail" />
                                </div>
                                <div className="blog-info">
                                    <h3 className="blog-title">{blog.title}</h3>
                                    <span className="blog-date">{blog.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="#" className="view-more-link" onClick={(e) => handleLinkClick(e, 'BLOG')}>
                        VIEW MORE <ArrowRight size={16} />
                    </a>
                </div>

                {/* Quick Links Section */}
                <div className="footer-links-section">
                    <div className="vertical-divide"></div>
                    <div className="links-content">
                        <h2 className="footer-section-title">QUICK LINKS</h2>
                        <ul className="quick-links-list">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" onClick={(e) => handleLinkClick(e, link)}>
                                        <ArrowRight size={14} className="link-arrow" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="footer-copyright">
                            <p>©2025 VEGA DIGITAL IT SOLUTIONS</p>
                            <p>ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
