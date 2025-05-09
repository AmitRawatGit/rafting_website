import React from 'react';
import { motion } from 'framer-motion';
import '../components/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Glacier Ganga Adventure
                    </motion.span>
                </div>
                <ul className="nav-links">
                    <li>
                        <motion.a
                            href="#home"
                            whileHover={{ scale: 1.1, color: '#ff6b6b' }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Home
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href="#activities"
                            whileHover={{ scale: 1.1, color: '#ff6b6b' }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Activities
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.1, color: '#ff6b6b' }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Contact
                        </motion.a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
