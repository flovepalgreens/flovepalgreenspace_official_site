import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaSeedling, FaUsers, FaLeaf } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import our_story from '../assets/our_story4.jpg'

import ceo from '../assets/team-members/john.jpg'
import cto from '../assets/team-members/sarvesh.jpg'
import cf from '../assets/team-members/niranjan.jpg'
import cfo from '../assets/team-members/athul.jpg'
import cmo from '../assets/team-members/gowtham.jpg'
import cpo from '../assets/team-members/nithin.jpg'
import coo from '../assets/team-members/kamalesh.jpg'


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '80px' }}
        >
            {/* Intro */}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h1 className="display-4 fw-bold mb-4">Cultivating the <span style={{ color: 'var(--primary-green)' }}>Future</span></h1>
                            <p className="lead text-muted text-justify">
                                Team Flovepal is dedicated to revolutionizing home and community gardening with innovative, eco-friendly solutions. Our mission is to bring nature closer to people by creating tools and resources that make sustainable gardening accessible to everyone.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <img src={our_story? our_story : "https://placehold.co/600x400/2e7d32/fff?text=Our+Story"} alt="Our Story" className="img-fluid rounded-4 shadow" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Core Values */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Core Values</h2>
                    <Row>
                        {[
                            { icon: FaHeart, text: <span><strong>Sustainability</strong> at the core of everything we do</span> },
                            { icon: FaSeedling, text: <span><strong>Promoting biodiversity</strong> and greener urban spaces</span> },
                            { icon: FaUsers, text: <span><strong>Building a global community</strong> of eco-conscious gardeners</span> },
                            { icon: FaLeaf, text: <span><strong>Combining innovation</strong> with simplicity for all users</span> }
                        ].map((val, idx) => (
                            <Col md={6} lg={3} key={idx} className="mb-4">
                                <div className="text-center p-4 bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                                    <val.icon className="icon-large mb-3" />
                                    <p className="lead text-muted">{val.text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Sustainability */}
            <section className="py-5">
                <Container>
                    <div className="p-5 rounded-4 text-white" style={{ background: 'var(--primary-green)' }}>
                        <Row className="align-items-center">
                            <Col lg={10}>
                                <h3>Sustainability at Our Core</h3>
                                <p>
                                    We are committed to reducing carbon footprints through sustainable gardening practices, biodegradable materials, and eco-conscious manufacturing. Every tool we create is designed with longevity and environmental harmony in mind.
                                </p>
                            </Col>
                            <Col lg={2} className="text-center">
                                <FiGlobe size={100} style={{ opacity: 0.8 }} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* Team */}
            <section className="py-5" style={{ background: '#f9fcf9' }}>
                <Container>
                    <h2 className="text-center mb-5 display-6 fw-bold">Meet the Team</h2>
                    <Row className="justify-content-center">
                        {[
                            { name: 'John Paul', role: 'Founder &Chief Executive Officer', img: ceo ? ceo : 'https://i.pravatar.cc/300?img=5' },
                            { name: 'Niranjan', role: 'Co-Founder & Chief Strategy Officer', img: cf ? cf : 'https://i.pravatar.cc/300?img=9' },
                            { name: 'Sarvesh', role: 'Chief Technology Officer', img: cto ? cto : 'https://i.pravatar.cc/300?img=11' },
                            { name: 'Athul', role: 'Chief Financial Officer', img: cfo ? cfo : 'https://i.pravatar.cc/300?img=3' },
                            { name: 'Gowtham', role: 'Chief Marketing Officer', img: cmo ? cmo : 'https://i.pravatar.cc/300?img=59' },
                            { name: 'Nithin Selva', role: 'Chief Product Officer', img: cpo ? cpo : 'https://i.pravatar.cc/300?img=57' },
                            { name: 'Kamaleshwer', role: 'Chief Operations Officer', img: coo ? coo : 'https://i.pravatar.cc/300?img=15' },
                        ].map((member, idx) => (
                            <Col md={6} lg={3} key={idx} className="mb-5 mb-lg-0">
                                <div className="team-member-card text-center">
                                    <div className="team-img-wrapper mb-3">
                                        <img src={member.img} alt={member.name} className="team-img shadow-sm" />
                                    </div>
                                    <h5 className="fw-bold mb-1">{member.name}</h5>
                                    <p className="text-muted small text-uppercase fw-semibold" style={{ letterSpacing: '1px' }}>{member.role}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-5 text-center">
                <Container>
                    <h2 className="mb-4">Ready to grow with us?</h2>
                    <Link to="/business">
                        <Button variant="primary" size="lg" className="btn-primary-custom">Discover Our Solutions</Button>
                    </Link>
                </Container>
            </section>
        </motion.div>
    );
};

export default About;
