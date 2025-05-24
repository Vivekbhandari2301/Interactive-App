import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image: "https://via.placeholder.com/100x100",
      rating: 5,
      text: "Working with this team has been an absolute pleasure. Their expertise and dedication to quality have helped us achieve remarkable results."
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director, Innovate Inc",
      image: "https://via.placeholder.com/100x100",
      rating: 5,
      text: "The level of professionalism and attention to detail is outstanding. They delivered beyond our expectations."
    },
    {
      name: "Robert Chen",
      role: "Founder, StartupX",
      image: "https://via.placeholder.com/100x100",
      rating: 5,
      text: "Their innovative solutions have transformed our business. Highly recommended for any tech project."
    },
    {
      name: "Sarah Williams",
      role: "Product Manager, GrowthCo",
      image: "https://via.placeholder.com/100x100",
      rating: 5,
      text: "The team's technical expertise and creative approach have been invaluable to our success."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="testimonials-container"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="testimonials-title"
      >
        Client Testimonials
      </motion.h1>

      <motion.div
        className="testimonials-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Testimonials; 