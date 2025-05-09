import React from 'react';
import '../components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
      <p className="developer-info">
          Designed and Developed by Amit Rawat
        </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Glacier Ganga Adventure</p>
        
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100040905895801" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />                    </a>

          <a href="https://www.instagram.com/_its_sunil_rawat/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />                    </a>

          <a href="https://www.youtube.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />                    </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;