import React from 'react';
import { motion } from 'framer-motion';
import './Activities.css';

// Dummy image imports
import raftingImg from '../assets/images/rafting.jpg';
import trekkingImg from '../assets/images/trekking.jpg';
import campingImg from '../assets/images/camping.jpg';
import taxiServiceImg from '../assets/images/taxiservice.jpg';  // Placeholder
import bikeRentImg from '../assets/images/bikerent.jpg';      // Placeholder
import bungeeJumpImg from '../assets/images/bungeejump.jpg';    // Placeholder
import reverseJumpImg from '../assets/images/reversejump.jpg';  // Placeholder
import flyingFoxImg from '../assets/images/flyingfox.jpg';    // Placeholder


function Activities() {
    const activities = [
        {
            id: 1,
            title: 'Rafting Adventures',
            description: 'Experience the thrill of white water rafting on challenging rivers.',
            image: raftingImg,
        },
        {
            id: 2,
            title: 'Scenic Treks',
            description: 'Explore breathtaking landscapes and discover hidden gems on our guided treks.',
            image: trekkingImg,
        },
        {
            id: 3,
            title: 'Riverside Camping',
            description: 'Enjoy peaceful nights under the stars at our comfortable camping sites.',
            image: campingImg,
        },
        {
            id: 4,
            title: 'Taxi Service',
            description: 'Convenient and reliable taxi service to and from your destinations.',
            image: taxiServiceImg,
        },
        {
            id: 5,
            title: 'Bike on Rent',
            description: 'Explore the area at your own pace with our rental bikes.',
            image: bikeRentImg,
        },
        {
            id: 6,
            title: 'Bungee Jumping',
            description: 'Take the ultimate leap of faith with our professional bungee jumping experience.',
            image: bungeeJumpImg,
        },
        {
            id: 7,
            title: 'Reverse Jump',
            description: 'Experience the adrenaline rush of a reverse jump, a thrilling variation of bungee jumping.',
            image: reverseJumpImg,
        },
        {
            id: 8,
            title: 'Flying Fox',
            description: 'Soar through the air on our flying fox adventure, enjoying breathtaking views.',
            image: flyingFoxImg,
        },
    ];

    return (
        <section className="activities" id="activities">
            <div className="container">
                <h2>Our Adventures & Facilities</h2>
                <div className="activities-grid">
                    {activities.map((activity) => (
                        <motion.div
                            key={activity.id}
                            className="activity-card"
                            whileHover={{ scale: 1.03, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src={activity.image} alt={activity.title} />
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                            {/* <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: '#388e3c' }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="view-details-button"
                            >
                                View Details
                            </motion.button> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Activities;
