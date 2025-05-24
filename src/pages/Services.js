import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Robust server-side solutions and API development."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup and management services."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Services",
      description: "Comprehensive security solutions and vulnerability assessment."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & SEO",
      description: "Data analytics and search engine optimization services."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="services-container"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="services-title"
      >
        Our Services
      </motion.h1>

      <motion.div
        className="services-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services; 