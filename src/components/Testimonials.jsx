import React from 'react';
import { Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const testimonials = [
  {
    id: 1,
    name: "Hannah",
    role: "Mother",
    quote: "The AI-powered plant care system detected my fern was getting too much direct sunlight before I noticed any signs. It suggested a location change and now it's thriving again!",
    stars: 5,
    avatar: "https://placehold.co/600x400?text=H"
  },
  {
    id: 2,
    name: "Graham",
    role: "Professional Journalist",
    quote: "Flovepal's automated watering system has been a game changer. My plants are healthier than ever, and I love getting notifications about their growth progress. Highly recommend.",
    stars: 5,
    avatar: "https://placehold.co/600x400?text=G" ? "https://placehold.co/600x400?text=G" : "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    name: "Jenny",
    role: "Professional Blogger",
    quote: "As a repeat customer, I'm amazed by how the smart monitoring adapts to each plant's needs. My indoor garden is flourishing with minimal effort on my part. I can definitely recommend!",
    stars: 5,
    avatar: "https://placehold.co/600x400?text=J" ? "https://placehold.co/600x400?text=J" : "https://i.pravatar.cc/150?img=5"
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light  position-relative overflow-hidden">
      <Container fluid>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#1a1a1a' }}>What People Are Saying</h2>
        
        <div className="testimonial-slider">
          <div className="testimonial-track">
            {/* Original Items */}
            {testimonials.map((item) => (
              <div key={`original-${item.id}`} className="testimonial-card">
                <div className="stars mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} color="#FDB813" size={18} />
                  ))}
                </div>
                <p className="quote-text mb-4">"{item.quote}"</p>
                <div className="user-info d-flex align-items-center">
                  <img src={item.avatar} alt={item.name} className="user-avatar" />
                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicated Items for Loop */}
            {testimonials.map((item) => (
              <div key={`duplicate-${item.id}`} className="testimonial-card mobile-hidden">
                <div className="stars mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} color="#FDB813" size={18} />
                  ))}
                </div>
                <p className="quote-text mb-4">"{item.quote}"</p>
                <div className="user-info d-flex align-items-center">
                  <img src={item.avatar} alt={item.name} className="user-avatar" />
                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            ))}
             {/* Triplicated Items to ensure smoothness on wide screens if needed */}
             {testimonials.map((item) => (
              <div key={`triplicate-${item.id}`} className="testimonial-card mobile-hidden">
                <div className="stars mb-3">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} color="#FDB813" size={18} />
                  ))}
                </div>
                <p className="quote-text mb-4">"{item.quote}"</p>
                <div className="user-info d-flex align-items-center">
                  <img src={item.avatar} alt={item.name} className="user-avatar" />
                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
