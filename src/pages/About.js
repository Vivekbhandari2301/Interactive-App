import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaLightbulb, FaChartLine, FaAward, FaHandshake, FaGlobe, FaCode } from 'react-icons/fa';

function About() {
  const stats = [
    {
      icon: <FaUsers />,
      value: "1000+",
      label: "Happy Clients"
    },
    {
      icon: <FaRocket />,
      value: "50+",
      label: "Projects Completed"
    },
    {
      icon: <FaLightbulb />,
      value: "25+",
      label: "Team Members"
    },
    {
      icon: <FaChartLine />,
      value: "95%",
      label: "Success Rate"
    }
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: "Industry Recognition",
      description: "Multiple awards for innovation and excellence in technology"
    },
    {
      icon: <FaHandshake />,
      title: "Client Satisfaction",
      description: "Consistently high client satisfaction ratings"
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Projects delivered across 20+ countries"
    },
    {
      icon: <FaCode />,
      title: "Technical Excellence",
      description: "Cutting-edge solutions using latest technologies"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-container"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="about-title"
      >
        About Us
      </motion.h1>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, we've been at the forefront of digital innovation, helping businesses
            transform their ideas into reality. Our journey began with a simple mission: to make
            technology accessible and beneficial for everyone. Today, we're proud to be trusted
            partners for businesses worldwide, delivering cutting-edge solutions that drive growth
            and success.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to empower businesses with cutting-edge technology solutions that drive growth
            and innovation. Our commitment to excellence and customer satisfaction has made us a
            trusted partner for companies worldwide. We believe in creating lasting relationships
            and delivering value that goes beyond expectations.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries and exploring new possibilities to stay ahead of the curve</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>Delivering the highest quality in everything we do, from code to customer service</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Building trust through honest and transparent relationships with our clients</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>Working together as a team to achieve extraordinary results for our clients</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About; 