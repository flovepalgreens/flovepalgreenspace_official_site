import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const ThankYou = () => {
    return (
        <motion.div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '80vh', paddingTop: '80px' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="text-center p-5 bg-white rounded-4 shadow-lg">
                <FiCheckCircle size={80} color="var(--primary-green)" className="mb-4" />
                <h1 className="mb-3">Thank You!</h1>
                <p className="lead text-muted mb-4">
                    Your request has been received. <br /> We will get back to you shortly.
                </p>
                <Link to="/">
                    <Button className="btn-primary-custom">Back to Home</Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default ThankYou;
