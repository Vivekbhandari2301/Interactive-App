import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaRocket, FaLightbulb, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <motion.div
        className="hero-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing features and possibilities</p>
        <div className="cta-buttons">
          <Link to="/features" className="primary-button">Explore Features</Link>
          <Link to="/contact" className="secondary-button">Contact Us</Link>
        </div>
      </motion.div>

      <motion.div
        className="features-showcase"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="feature-icon" />
            <h3>Fast Performance</h3>
            <p>Lightning-fast loading times and smooth interactions</p>
          </motion.div>
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLightbulb className="feature-icon" />
            <h3>Innovative Solutions</h3>
            <p>Cutting-edge technology and creative problem-solving</p>
          </motion.div>
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaChartLine className="feature-icon" />
            <h3>Growth Focused</h3>
            <p>Strategies designed to scale your business</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="about-preview"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="about-preview-content">
          <h2>Meet Our Team</h2>
          <p>
            We are a passionate team of innovators, creators, and problem-solvers dedicated to
            delivering exceptional digital experiences. With years of expertise and a commitment
            to excellence, we help businesses transform their ideas into reality.
          </p>
          <Link to="/about" className="learn-more-button">
            Learn More <FaArrowRight />
          </Link>
        </div>
        <div className="about-stats-preview">
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="testimonials-preview"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <motion.div 
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>"Outstanding service and exceptional results. The team went above and beyond our expectations."</p>
            <div className="client-info">
              <FaUsers className="client-icon" />
              <div>
                <h4>John Smith</h4>
                <p>CEO, TechCorp</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>"Professional, innovative, and reliable. They transformed our digital presence completely."</p>
            <div className="client-info">
              <FaUsers className="client-icon" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Marketing Director, Innovate Inc</p>
              </div>
            </div>
          </motion.div>
        </div>
        <Link to="/testimonials" className="view-all-button">
          View All Testimonials <FaArrowRight />
        </Link>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of satisfied customers who have transformed their business with us.</p>
        <Link to="/contact" className="cta-button">
          Start Your Journey <FaArrowRight />
        </Link>
      </motion.div>

      <motion.div 
        className="social-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="icon-link"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="icon-link"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="icon-link"
          >
            <FaTwitter size={30} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home; 