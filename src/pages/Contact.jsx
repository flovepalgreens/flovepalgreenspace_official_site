import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', city: '',
        problem: '', source: '', plants: '',
        consultationType: 'Online', gardenType: 'Indoor'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formError) setFormError('');
    };

    const handlePhoneChange = (value, country, e, formattedValue) => {
        setFormData(prev => ({ ...prev, phone: value }));
        if (formError) setFormError('');
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        // 1. Email Validation
        if (!validateEmail(formData.email)) {
            setFormError('Please enter a valid email address.');
            return;
        }

        // 2. Phone Validation
        // Specialized validation:
        // India (91) requires 12 digits total (91 + 10 digits).
        // Most other countries (e.g. US 1 + 10 = 11) require at least 11.
        if (formData.phone.startsWith('91')) {
             if (formData.phone.length < 12) {
                 setFormError('Please enter a valid 10-digit Indian mobile number.');
                 return;
             }
        } else if (formData.phone.length < 11) {
             setFormError('Please enter a valid phone number.');
             return;
        }

        setLoading(true);
        console.log("Submitting Form Data:", formData);
        
        try {
            await addDoc(collection(db, "contact_form_submission"), {
                ...formData,
                timestamp: serverTimestamp()
            });
            // alert("Form submitted successfully!");
            navigate('/thankyou');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error submitting form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '80px', paddingBottom: '50px' }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="bg-white p-5 rounded-4 shadow-lg border-top border-5 border-success">
                            <h2 className="text-center mb-4">Get in Touch</h2>
                            {formError && <Alert variant="danger">{formError}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control required type="text" name="name" onChange={handleChange} />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control required type="email" name="email" onChange={handleChange} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <PhoneInput
                                            country={'in'} // Default country set to India
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            inputStyle={{
                                                width: '100%',
                                                height: '38px',
                                                borderRadius: '0.375rem',
                                                borderColor: '#dee2e6' // Bootstrap default
                                            }}
                                            containerClass="phone-input-container"
                                            inputClass="form-control"
                                        />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="city" onChange={handleChange} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Consultation Type</Form.Label>
                                        <Form.Select name="consultationType" onChange={handleChange}>
                                            <option>Online</option>
                                            <option>Offline</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Garden Type</Form.Label>
                                        <Form.Select name="gardenType" onChange={handleChange}>
                                            <option>Indoor</option>
                                            <option>Outdoor</option>
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <div className="mb-3">
                                    <Form.Label>Number of Plants</Form.Label>
                                    <Form.Control type="number" name="plants" placeholder="e.g. 10" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <Form.Label>How did you hear about us?</Form.Label>
                                    <Form.Control type="text" name="source" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <Form.Label>What problem are you facing?</Form.Label>
                                    <Form.Control as="textarea" rows={4} name="problem" onChange={handleChange} />
                                </div>

                                <div className="text-center mt-4">
                                    <Button type="submit" className="btn-primary-custom w-50 py-2 fs-5" disabled={loading}>
                                        {loading ? 'Sending...' : 'Submit Request'}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Contact;
