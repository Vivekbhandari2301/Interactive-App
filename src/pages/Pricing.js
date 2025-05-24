import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "month",
      features: [
        "Basic Features",
        "5 Projects",
        "10GB Storage",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      features: [
        "All Basic Features",
        "Unlimited Projects",
        "50GB Storage",
        "Priority Support",
        "Advanced Analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      features: [
        "All Pro Features",
        "Custom Solutions",
        "Unlimited Storage",
        "24/7 Support",
        "Dedicated Manager",
        "API Access"
      ],
      popular: false
    }
  ];

  return (
    <motion.div
      className="pricing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="pricing-title"
      >
        Choose Your Plan
      </motion.h1>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {plan.popular && (
              <div className="popular-badge">Most Popular</div>
            )}
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + featureIndex * 0.1 }}
                >
                  <FaCheck className="check-icon" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className={`pricing-button ${plan.popular ? 'popular' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Pricing; 