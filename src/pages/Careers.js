import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaRocket, FaGraduationCap, FaHeart, FaGlobe } from 'react-icons/fa';

function Careers() {
  const benefits = [
    {
      icon: <FaBriefcase />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with regular reviews"
    },
    {
      icon: <FaUsers />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      description: "Clear career paths and professional development opportunities"
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and certifications"
    },
    {
      icon: <FaHeart />,
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <FaGlobe />,
      title: "Global Team",
      description: "Work with talented people from around the world"
    }
  ];

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build next-generation web applications using React and modern web technologies."
    },
    {
      title: "Backend Engineer",
      location: "New York",
      type: "Full-time",
      description: "Design and implement scalable backend services using Node.js and cloud technologies."
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user interfaces for our digital products."
    },
    {
      title: "DevOps Engineer",
      location: "San Francisco",
      type: "Full-time",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="careers-container"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="careers-title"
      >
        Join Our Team
      </motion.h1>

      <motion.div
        className="benefits-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Why Work With Us</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="positions-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Open Positions</h2>
        <div className="positions-grid">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              className="position-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{position.title}</h3>
              <div className="position-meta">
                <span>{position.location}</span>
                <span>{position.type}</span>
              </div>
              <p>{position.description}</p>
              <button className="apply-button">Apply Now</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Careers; 