import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Styles';

const tourismArticles = [
  {
    title: 'Exploring Vietnam\'s Natural Wonders',
    imgSrc: require('../../assets/images/travel.jpg'),
    snippet: 'Discover the breathtaking landscapes and unique ecosystems that Vietnam has to offer...',
    link: '/detail',
  },
  {
    title: 'Cultural Heritage of Vietnam',
    imgSrc: require('../../assets/images/travel.jpg'),
    snippet: 'Dive into the rich cultural heritage and traditions that define the Vietnamese way of life...',
    link: '/detail',
  },
  {
    title: 'Adventure Activities in Vietnam',
    imgSrc: require('../../assets/images/travel.jpg'),
    snippet: 'From hiking in the mountains to diving in the sea, explore the thrilling adventures available...',
    link: '/detail',
  },
];

const Tourism = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        Tourism
      </Typography>

      <Box style={styles.articlesContainer}>
        {tourismArticles.map((article, index) => (
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

export default Tourism;
