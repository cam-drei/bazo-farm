import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Styles';

const articles = [
  {
    title: 'Sustainable Farming Practices',
    imgSrc: require('../../assets/images/rice.webp'),
    snippet: 'Sustainable farming practices ensure long-term food production and environmental health...',
    link: '/detail',
  },
  {
    title: 'Organic Agriculture Benefits',
    imgSrc: require('../../assets/images/rice.webp'),
    snippet: 'Organic agriculture offers many benefits for human health and environmental sustainability...',
    link: '/detail',
  },
  {
    title: 'Innovations in Agriculture',
    imgSrc: require('../../assets/images/rice.webp'),
    snippet: 'The latest innovations in agriculture are reshaping how we produce food...',
    link: '/detail',
  },
];

const Agriculture = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        Agriculture
      </Typography>

      <Box style={styles.articlesContainer}>
        {articles.map((article, index) => (
          <Box key={index} style={styles.articleBox}>
            <img src={article.imgSrc} alt={article.title} style={styles.articleImage} />
            <Box>
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
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Agriculture;
