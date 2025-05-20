import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <section className="contact contact-page" id="contact">
            <div className="container">
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-intro">
                    We're here to help! Reach out to us through the following channels:
                </p>

                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="contact-detail-item">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                        <div className="contact-text">
                            <h3 className="contact-title">Phone : Sunil Rawat</h3>
                            <p>+91 7060119530</p>
                            <p>+91 6005048012</p>
                        </div>
                    </div>
                    <div className="contact-detail-item">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        <div className="contact-text">
                            <h3 className="contact-title">Email:</h3>
                            <p>sunilrawat8334@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-detail-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                        <div className="contact-text">
                            <h3 className="contact-title">Address:</h3>
                            <p>
                                Ram Jhula, Rishikesh, Uttarakhand<br />
                                Near Darshan Mahavidyalaya
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="contact-map">
                    {/* Replace this with your actual Google Maps embed URL */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.49313772819534!2d78.31383463493052!3d30.124342608415255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917e70ef5f603%3A0x6e9ccc85231171b3!2sShri%20Darshan%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1746721541734!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;
