import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from './Styles';

const detailImage = require('../../assets/images/travel.jpg');

const Detail = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        Bamboo
      </Typography>

      <img src={detailImage} alt="Detail" style={styles.image} />

      <Typography variant="body1" style={styles.text}>
        Bamboo is a versatile plant that plays a significant role in many cultures, especially in Asia. 
        It is known for its strength, flexibility, and rapid growth. 
        Bamboo is used in construction, crafts, and as a food source.
        Bamboo is a versatile plant that plays a significant role in many cultures, especially in Asia. 
        It is known for its strength, flexibility, and rapid growth. 
        Bamboo is used in construction, crafts, and as a food source.
        Bamboo is a versatile plant that plays a significant role in many cultures, especially in Asia. 
        It is known for its strength, flexibility, and rapid growth. 
        Bamboo is used in construction, crafts, and as a food source.
        Bamboo is a versatile plant that plays a significant role in many cultures, especially in Asia. 
        It is known for its strength, flexibility, and rapid growth. 
        Bamboo is used in construction, crafts, and as a food source.
        Bamboo is a versatile plant that plays a significant role in many cultures, especially in Asia. 
        It is known for its strength, flexibility, and rapid growth. 
        Bamboo is used in construction, crafts, and as a food source.
        Bamboo is a versatile plant that plays a significant role in many cultures, especially in Asia. 
        It is known for its strength, flexibility, and rapid growth. 
        Bamboo is used in construction, crafts, and as a food source.
      </Typography>
    </Container>
  );
};

export default Detail;
