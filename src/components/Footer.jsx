import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    {/* Brand & Description */}
                    <div className="col-md-4 mb-4">
                        <h3 className="footer-brand">Flovepal</h3>
                        <p className="footer-desc">
                            Transforming spaces into living, breathing ecosystems. We bring nature back into your daily life with sustainable and aesthetic green solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/business">Business</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div className="col-md-4 mb-4">
                        <h5 className="footer-heading">Connect With Us</h5>
                        <p className="footer-contact-text">flovepalgreenspace@gmail.com</p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/people/Flovepal-Greenspace/pfbid0SARtGFvSeeN2hXQUjceUh1vNtQQszJELEYbS94yqaNAERS9aTedJeH2dUHodFGQYl/" target="_blank" rel="noreferrer" className="social-icon">
                                <FaFacebookF /> 
                            </a>
                            <a href="https://x.com/Flovepalgs" target="_blank" rel="noreferrer" className="social-icon">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/_.flovepal._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.youtube.com/@FlovepalGreenspace" target="_blank" rel="noreferrer" className="social-icon">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {year} Flovepal Greenspace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
