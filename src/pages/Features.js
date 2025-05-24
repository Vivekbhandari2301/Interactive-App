import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaPalette, FaMobile } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Lightning-fast loading times and smooth animations"
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Well-structured and maintainable codebase"
    },
    {
      icon: <FaPalette />,
      title: "Beautiful Design",
      description: "Modern and responsive design that looks great on all devices"
    },
    {
      icon: <FaMobile />,
      title: "Mobile First",
      description: "Optimized for mobile devices with touch-friendly interactions"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="features-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="features-title"
      >
        Our Features
      </motion.h1>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Features; 