import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Styles';

const imageData = [
  {
    title: 'Article 1',
    imgSrc: require('../../assets/images/travel.jpg'),
  },
  {
    title: 'Article 2',
    imgSrc: require('../../assets/images/travel.jpg'),
  },
  {
    title: 'Article 3',
    imgSrc: require('../../assets/images/travel.jpg'),
  },
];

const articles = [
  {
    title: 'Sustainable Farming Practices',
    imgSrc: require('../../assets/images/travel.jpg'),
    snippet: 'Sustainable farming practices ensure long-term food production and environmental health...',
    link: '/detail',
  },
  {
    title: 'Organic Agriculture Benefits',
    imgSrc: require('../../assets/images/travel.jpg'),
    snippet: 'Organic agriculture offers many benefits for human health and environmental sustainability...',
    link: '/detail',
  },
  {
    title: 'Innovations in Agriculture',
    imgSrc: require('../../assets/images/travel.jpg'),
    snippet: 'The latest innovations in agriculture are reshaping how we produce food...',
    link: '/detail',
  },
];

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.homeContainer}>
        <Box style={styles.centeredTextContainer}>
          <Typography gutterBottom variant="h4" component="div">
            <Link to="/detail" style={styles.linkStyle}>
              Bamboo
            </Link>
          </Typography>
        </Box>
      </div>

      <Box style={styles.introductionContainer}>
        <Typography variant="h5" component="div" style={styles.introductionText}>
          Welcome to BAZO Farm! Discover the beauty of agriculture and tourism as we share the latest articles about sustainable farming practices, local produce, and breathtaking tourist spots. Join us on a journey to explore the harmony between nature and adventure!
        </Typography>
      </Box>

      <Typography variant="h6" style={styles.explanatoryText}>
        Explore our beautiful images that capture the essence of agriculture and nature.
      </Typography>

      <Box style={styles.imageWrapper}>
        <Box style={styles.imageRow}>
          {imageData.map((image, index) => (
            <Box key={index} style={styles.imageContainer}>
              <img src={image.imgSrc} alt={image.title} style={styles.image} />
              <Typography variant="h6" component="div" style={styles.imageTitle}>
                <Link to="/detail" style={styles.linkStyle}>
                  {image.title}
                </Link>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Typography variant="h6" style={styles.explanatoryText}>
        Read our latest articles to learn more about sustainable practices in agriculture.
      </Typography>

      <Box style={styles.articlesContainer}>
        {articles.map((article, index) => (
          <Box key={index} style={styles.articleBox}>
            <img src={article.imgSrc} alt={article.title} style={styles.articleImage} />
            <Typography variant="h6" style={styles.articleTitle}>
              {article.title}
            </Typography>
            <Typography variant="body1" style={styles.articleSnippet}>
              {article.snippet}{' '}
              <Link to={article.link} style={styles.seeMoreLink}>
                Read More
              </Link>
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Home;
