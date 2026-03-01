import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiDroplet, FiZap, FiActivity, FiGlobe, FiSun } from "react-icons/fi";
import smartPotImg from "../assets/smart_pot.png";
import nutriSenseImg from "../assets/nutri_sense.png";
import isoPotImg from '../assets/isopot.png';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Aqvoir IsoPot",
      description:
        "A modern, aesthetic smart planter designed for single-plant décor. Aqvoir IsoPot enhances your home with a live plant while intelligently monitoring water levels and soil moisture through seamless mobile connectivity.",
      features: [
        { icon: FiDroplet, text: "Smart Water Monitoring" },
        { icon: FiActivity, text: "Real-time Moisture Tracking" },
        { icon: FiGlobe, text: "Mobile App Connectivity" },
      ],
    //   image: isoPotImg,
      price: "₹1,099",
    },
    {
      id: 2,
      name: "Flovepal GreenGrid",
      description:
        "A complete smart irrigation and plant health ecosystem designed for managing up to 40 plants effortlessly. It delivers individualized watering based on time schedules or real-time moisture levels, while advanced sensors track pH and NPK to ensure optimal plant nutrition.",
      features: [
        { icon: FiDroplet, text: "Individual Auto-Watering for 40 Plants" },
        { icon: FiActivity, text: "Moisture-Based & Timed Irrigation" },
        { icon: FiZap, text: "pH & NPK Nutrient Monitoring" },
        { icon: FiGlobe, text: "Mobile Alerts & Control System" },
      ],
    //   image: nutriSenseImg,
      price: "₹15,000",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-5"
      style={{ backgroundColor: "var(--light-bg)", minHeight: "100vh" }}
    >
      <section className="py-5 mt-5">
        <Container>
          <div className="text-center mb-5">
            <motion.h1
              className="display-4 fw-bold mb-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our <span style={{ color: "var(--primary-green)" }}>Products</span>
            </motion.h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Discover our latest innovations in smart indoor gardening. We
              blend nature with technology to make plant care effortless and
              efficient.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {products.map((product, index) => (
              <Col lg={5} md={6} key={product.id} className="d-flex">
                <motion.div
                  className="h-100 w-100"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Card className="feature-card h-100 border-0 overflow-hidden shadow-sm d-flex flex-column">
                    {product.image && (
                      <div
                        className="text-center p-4 bg-white flex-shrink-0"
                        style={{
                          minHeight: "300px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-fluid rounded-3"
                          style={{ maxHeight: "250px", objectFit: "contain" }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    <Card.Body className="d-flex flex-column p-4 flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-3" style={{ minHeight: '60px' }}>
                        <Card.Title
                          className="h4 fw-bold mb-0 pe-2"
                          style={{ color: "var(--primary-green)" }}
                        >
                          {product.name}
                        </Card.Title>
                        <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-bold" style={{ whiteSpace: 'nowrap' }}>
                          {product.price}
                        </span>
                      </div>
                      
                      <Card.Text className="text-muted mb-4" style={{ minHeight: '100px', fontSize: '0.95rem' }}>
                        {product.description}
                      </Card.Text>

                      <div className="mb-4 flex-grow-1" style={{ minHeight: '120px' }}>
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="d-flex align-items-center mb-2"
                          >
                            <feature.icon
                              className="me-2 flex-shrink-0"
                              style={{ color: "var(--primary-green)" }}
                            />
                            <span className="small">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Button
                          className="btn-primary-custom w-100 py-3 fw-bold"
                          onClick={() => {
                            const contactSection =
                              document.getElementById("contact");
                            if (contactSection) {
                              contactSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            } else {
                              window.location.href = "/contact";
                            }
                          }}
                        >
                          Inquire Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Products;
