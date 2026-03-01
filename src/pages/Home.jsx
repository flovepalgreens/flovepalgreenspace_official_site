import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiCpu, FiSun, FiLayout, FiTrendingUp } from 'react-icons/fi';
import heroBg from '../assets/hero_bg.jpeg';
import growingPlantGif from '../assets/growing_plant.gif';
import courasel1 from '../assets/couresal1.jpg'
import courasel2 from '../assets/couresal2.jpg'
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* --- Static Hero Section --- */}
            <div
                className="hero-section text-center text-white d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    position: 'relative'
                }}
            >
                <Container>
                    <motion.h1
                        className="display-1 fw-bold mb-3"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span style={{ color: 'var(--neon-green)' }}>Flovepal Greenspace </span>
                        makes
                        <br />
                        your garden smarter
                    </motion.h1>
                    {/* <p className="lead text-light mb-4 text-shadow">Scroll to explore the journey</p> */}
                </Container>
            </div>

            {/* --- Our Idea Section --- */}
            <section className="py-5 bg-white position-relative" style={{ zIndex: 10 }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0 text-center text-lg-start">
                            <h2 className="mb-4">Smart Growth</h2>
                            <p className="lead" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                <span className="fw-bold text-success">Our idea is simple</span>—Since growing plants has a lot of benefits as proven by many researchers and environmentalists both for the individual and for the whole community cumulatively, we want to help people grow plants indoors without the usual struggles of watering, fertilizing, or monitoring their health.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Using IoT, our system takes care of watering and nutrient needs while evaluating plant growth in real time with the help of AI.
                            </p>
                            <p className="mt-4 fst-italic text-muted">
                                We believe this can make a real difference, especially in urban spaces where maintaining plants can be challenging.
                            </p>
                        </Col>
                        {/* Image Column - Hidden on Mobile */}
                        <Col lg={6} className="d-none d-lg-block">
                            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px', overflow: 'hidden' }}>
                                <img
                                    src={growingPlantGif}
                                    alt="Growing Plant Animation"
                                    style={{ width: '60%', height: '60%', objectFit: 'cover' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* --- Why Choose Flovepal --- */}
            <section className="bg-white position-relative" style={{ zIndex: 10 }}>
                <Container>
                    <div className="text-center mb-5 pt-5">
                        <h2 className="mb-3">Why Choose Flovepal?</h2>
                        <p className="text-muted">Bridging the gap between nature and technology</p>
                    </div>
                    <Row>
                        {[
                            { icon: FiSun, title: 'Sustainable Energy', text: 'Powered by renewable sources.' },
                            { icon: FiCpu, title: 'IoT Monitoring', text: 'Real-time crop health tracking.' },
                            { icon: FiLayout, title: 'Smart Layouts', text: 'Optimized space for urban farming.' },
                            { icon: FiTrendingUp, title: 'High Yield', text: 'Data-driven growth strategies.' }
                        ].map((item, index) => (
                            <Col md={6} lg={3} className="mb-4" key={index}>
                                <Card className="feature-card text-center h-100 border-0">
                                    <Card.Body>
                                        <item.icon className="icon-large" />
                                        <Card.Title className="fw-bold mt-3">{item.title}</Card.Title>
                                        <Card.Text className="text-muted">{item.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* --- Modern Green Carousel --- */}
            <section className="py-5" style={{ background: 'var(--light-bg)', position: 'relative', zIndex: 10 }}>
                <Container>
                    <h2 className="text-center mb-5">Gardening Inspirations</h2>
                    <Carousel className="shadow-lg rounded-4 overflow-hidden">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 modern-carousel-img"
                                // src="https://placehold.co/1200x500/2e7d32/ffffff?text=Hydroponic+Systems"
                                src={courasel2}
                                alt="Hydroponic"
                            />
                            {/* <Carousel.Caption>
                                <h3>Hydroponic Systems</h3>
                                <p>Water-efficient growing 365 days a year.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 modern-carousel-img"
                                // src="https://placehold.co/1200x500/66bb6a/ffffff?text=Automated+Care"
                                src={courasel1}
                                alt="Automation"
                            />
                            {/* <Carousel.Caption>
                                <h3>Automated Care</h3>
                                <p>Robotic arms ensuring perfect precision.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

            {/* --- Testimonials --- */}
            {/* <Testimonials /> */}
        </motion.div>
    );
};

export default Home;
