import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';
import { Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Navigation = ({ onOpenChat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Business', path: '/business' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleChatFromMenu = () => {
        setIsOpen(false);
        onOpenChat();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
                <Container>
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={logo} alt="Flovepal Logo" style={{ height: '50px' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="d-none d-lg-flex align-items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="d-lg-none">
                        <Button variant="link" onClick={toggleMenu} style={{ color: 'var(--primary-green)', fontSize: '1.5rem', padding: 0 }}>
                            {isOpen ? <FiX /> : <FiMenu />}
                        </Button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button 
                            variant="link" 
                            onClick={toggleMenu} 
                            className="mobile-menu-close"
                        >
                            <FiX />
                        </Button>
                        <motion.div
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="mobile-menu-item"
                                    onClick={handleLinkClick}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Button
                                variant="outline-success"
                                className="mobile-menu-chat-trigger rounded-pill px-4 py-2 mt-4"
                                onClick={handleChatFromMenu}
                            >
                                <FiMessageSquare className="me-2" /> Chat with AI
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
