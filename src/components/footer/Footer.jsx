import React from 'react';
import './Footer.css'; // For styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Links Section */}
      <div className="footer-links">
        <a href="/support" className="footer-link">Support</a>
        <a href="/community" className="footer-link">Community</a>
        <a href="/hosting" className="footer-link">Hosting</a>
        <a href="/about" className="footer-link">About</a>
      </div>

      {/* Social Media Icons Section */}
      <div className="footer-social-media">
        <a href="https://facebook.com" className="social-icon" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="social-icon" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" className="social-icon" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Copyright Information */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
