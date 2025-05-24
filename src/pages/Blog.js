import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';

function Blog() {
  const articles = [
    {
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building amazing web applications...",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Development",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Explore the latest trends and technologies shaping the future of web development...",
      author: "Jane Smith",
      date: "March 14, 2024",
      category: "Technology",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Best Practices for UI/UX Design",
      excerpt: "Discover the essential principles of creating user-friendly interfaces...",
      author: "Mike Johnson",
      date: "March 13, 2024",
      category: "Design",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  const categories = ["All", "Development", "Technology", "Design", "Business"];

  return (
    <motion.div
      className="blog-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="blog-title"
      >
        Latest Articles
      </motion.h1>

      <motion.div
        className="categories"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className="category-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <motion.article
            key={index}
            className="article-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span><FaUser /> {article.author}</span>
                <span><FaCalendar /> {article.date}</span>
                <span><FaTag /> {article.category}</span>
              </div>
              <motion.button
                className="read-more"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

export default Blog; 