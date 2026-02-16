import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        title: "ELV System and Smart Parking: How IoT Enhances Parking Management",
        date: "FEBRUARY 10, 2026",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "How CCTV Analytics Software Improves Security for Dubai Businesses",
        date: "FEBRUARY 6, 2026",
        image: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=2040&auto=format&fit=crop"
    },
    {
        title: "SIRA Approved CCTV for Retail Chains: Compliance Tips",
        date: "FEBRUARY 4, 2026",
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
    },
    {
        title: "ELV System for Buildings in UAE: Key Mistakes to Avoid During Implementation",
        date: "JANUARY 27, 2026",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
];

const quickLinks = [
    "ABOUT US", "LEADERSHIP TEAM", "OUR JOURNEY", "CONTACT US", "LATEST NEWS", "TERMS OF SERVICE"
];

const Footer = () => {
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
                    <a href="#" className="view-more-link">
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
                                    <a href="#">
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
