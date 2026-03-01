import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWifi, FaChartBar, FaTint, FaLeaf, FaNetworkWired, FaPlus } from 'react-icons/fa';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="bg-white rounded-4 p-4 shadow-sm position-relative"
            style={{ cursor: 'pointer', transition: 'box-shadow 0.3s ease' }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,0.075)'}
        >
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold text-dark" style={{ fontSize: '1.1rem' }}>{question}</h5>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaPlus className="text-success" size={18} />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 15 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="text-muted mb-0">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Business = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '80px' }}
        >
            <section className="py-5 bg-light text-center">
                <Container>
                    <h1 className="fw-bold">Our Solutions</h1>
                    {/* <p className="lead">Scalable IoT architecture for modern agriculture businesses.</p> */}
                    <p className="lead">We are at the forefront of eco-friendly solutions, providing innovative products for sustainable living. <br /> Our focus spans multiple industries that contribute to a greener planet.</p>
                </Container>
            </section>

            {/* Sectors */}
            <section className="py-5">
                <Container>
                    <h2 className="mb-5 text-center">Sectors We Serve</h2>
                    <Row>
                        {[
                            { title: 'Urban Gardening Solutions', desc: 'Maximized green spaces in city environments with vertical setups.', color: 'sector-green' },
                            { title: 'Eco-friendly Landscaping', desc: 'Sustainable designs that beautify while preserving local ecology.', color: 'sector-teal' },
                            { title: 'Greenhouse Innovations', desc: 'Climate control systems for optimal year-round plant growth.', color: 'sector-blue' },
                            { title: 'Smart Watering Systems', desc: 'IoT irrigation ensuring precise hydration and minimal waste.', color: 'sector-teal' }, // Cycle pattern? Green->Teal->Blue
                            { title: 'Botanical Research', desc: 'Studying plant resilience to develop stronger crop varieties.', color: 'sector-blue' },
                            { title: 'Vertical Farming', desc: 'High-yield layered growing technologies for urban food security.', color: 'sector-green' },
                            { title: 'Community Gardens', desc: 'Collaborative spaces fostering community and sustainability.', color: 'sector-blue' },
                            { title: 'Organic Technologies', desc: 'Supporting chemical-free agriculture with modern tools.', color: 'sector-teal' },
                            { title: 'Carbon Footprint Reduction Programs', desc: 'Supporting chemical-free agriculture with modern tools.', color: 'sector-teal' },
                        ].map((item, idx) => (
                            <Col lg={4} md={6} xs={12} key={idx} className="mb-4">
                                <div className={`sector-card ${['sector-green', 'sector-teal', 'sector-blue'][idx % 3]}`}>
                                    <div className="sector-flex">
                                        <div className="sector-num">{idx + 1}.</div>
                                        <div className="sector-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Services */}
            <section className="py-5 bg-white">
                <Container>
                    <h2 className="mb-5 text-center">Our Services</h2>
                    <Row className="justify-content-center">
                        {[
                            { title: 'Custom IoT Sensor Deployment', icon: FaWifi },
                            { title: 'Data Analytics Dashboard Setup', icon: FaChartBar },
                            { title: 'Irrigation Automation Systems', icon: FaTint },
                            { title: 'Soil Health Monitoring', icon: FaLeaf },
                            { title: 'Supply Chain Integration', icon: FaNetworkWired }
                        ].map((service, idx) => (
                            <Col lg={4} md={6} key={idx} className="mb-4">
                                <div className="text-center p-4 bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center border">
                                    <service.icon className="icon-large mb-3" />
                                    <h5 className="fw-bold">{service.title}</h5>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FAQ */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                    <Row className="g-4">
                        {[
                            { q: "How can I start a small home garden?", a: "To start a small home garden, choose a sunny spot, select easy-to-grow plants, use organic soil, and water regularly." },
                            { q: "What are the best plants for indoor gardening?", a: "Some of the best plants for indoor gardening include pothos, snake plants, peace lilies, and spider plants." },
                            { q: "Can I integrate with existing systems?", a: "Our API is designed to be flexible and can integrate with most major ERP and farm management software." },
                            // { q: "Is the system weather-resistant?", a: "Absolutely. Our outdoor sensors are IP67 rated, designed to withstand harsh weather conditions." },
                            // { q: "How do I access the data?", a: "You can access real-time data through our dedicated mobile app or web dashboard from anywhere." },
                            // { q: "Do you provide staff training?", a: "Yes, we provide comprehensive training sessions for your team during the handover process." }
                        ].map((faq, idx) => (
                            <Col lg={4} md={6} key={idx}>
                                <FaqItem question={faq.q} answer={faq.a} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </motion.div>
    );
};

export default Business;
