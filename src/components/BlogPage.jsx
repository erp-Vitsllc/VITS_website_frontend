import React, { useEffect } from 'react';
import Header from './Header';
import BlogHero from './BlogHero';
import BlogSlider from './BlogSlider';
import Footer from './Footer';
import NavigationDrawer from './NavigationDrawer';
import { useWebsiteController } from '../hooks/useWebsiteController';

const BlogPage = () => {
    const controller = useWebsiteController();
    const { config, isDrawerOpen, toggleDrawer, handleNavClick } = controller;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main-scroll-container">
            <Header controller={controller} />
            <NavigationDrawer
                isOpen={isDrawerOpen}
                onClose={toggleDrawer}
                onNavClick={handleNavClick}
                config={config}
            />
            <div className="page-content-wrapper">
                <BlogHero />
                <BlogSlider />
                {/* Blog content posts can go here later */}
            </div>
            <Footer controller={controller} />
        </div>
    );
};

export default BlogPage;
