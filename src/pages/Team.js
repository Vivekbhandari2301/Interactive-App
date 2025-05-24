import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/300x300",
      bio: "Visionary leader with 15+ years of experience in tech innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:sarah@example.com"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://via.placeholder.com/300x300",
      bio: "Tech expert specializing in scalable architecture and AI solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:michael@example.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      image: "https://via.placeholder.com/300x300",
      bio: "Award-winning designer with a passion for user experience.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:emily@example.com"
      }
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      image: "https://via.placeholder.com/300x300",
      bio: "Full-stack developer with expertise in modern web technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:david@example.com"
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="team-container"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="team-title"
      >
        Meet Our Team
      </motion.h1>

      <motion.div
        className="team-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-content">
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p>{member.bio}</p>
              <div className="team-social">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={member.social.email}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Team; 