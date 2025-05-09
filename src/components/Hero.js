import React from 'react';
import { motion } from 'framer-motion';
import '../components/Hero.css';

// Dummy image import
import heroBg from '../assets/images/hero3.jpg';

function Hero() {
    return (
        <section
            className="hero"
            id="home"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Explore the Great Outdoors
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                >
                    Discover amazing adventures and create lasting memories.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#ff7800' }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cta-button"
                    onClick={() => {
                        const activitiesSection = document.getElementById('activities');
                        if (activitiesSection) {
                            activitiesSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Start Your Adventure
                </motion.button>
            </div>
        </section>
    );
}

export default Hero;