import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "This website has completely changed the way I discover new books! The design is beautiful and browsing is effortless.",
    author: "Ayesha Khan",
    role: "Book Lover & Blogger"
  },
  {
    quote: "Excellent collection and very user-friendly. I always find the perfect read here. Highly recommend to all book enthusiasts.",
    author: "Rajiv Sharma",
    role: "Literature Enthusiast"
  },
  {
    quote: "The curated picks and trending books keep me coming back. Best online book hub ever!",
    author: "Neha Verma",
    role: "Author & Reviewer"
  },
  {
    quote: "The delivery is fast and reliable. I always receive books in perfect condition. Kudos to the team!",
    author: "Sunil Mehta",
    role: "Frequent Buyer"
  },
  {
    quote: "Their AI suggestions are spot on! Helped me discover gems I would've missed.",
    author: "Pooja Sharma",
    role: "Techie & Reader"
  },
  {
    quote: "Amazing experience. The website is intuitive and filled with the best titles.",
    author: "Ananya Roy",
    role: "College Student"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonialsData.length) % testimonialsData.length);
  };

  const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + 3);

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Readers Say</h2>
      <div className="testimonials-carousel">
        <button className="carousel-btn left" onClick={prevSlide}>❮</button>
        <div className="testimonials-grid">
          {visibleTestimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">{item.quote}</p>
              <h4 className="testimonial-author">- {item.author}</h4>
              <p className="testimonial-role">{item.role}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
};

export default Testimonials;
