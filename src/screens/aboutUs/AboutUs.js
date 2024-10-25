import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from './Styles';

const aboutUsImage = require('../../assets/images/team.jpeg');

const AboutUs = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        About Us
      </Typography>

      <img src={aboutUsImage} alt="About Us" style={styles.image} />

      <Typography variant="body1" style={styles.text}>
        We are committed to promoting sustainable practices in agriculture and tourism. 
        Our mission is to educate and inspire individuals to appreciate the importance of 
        preserving our natural resources while enjoying the beauty of our surroundings.
      </Typography>
    </Container>
  );
};

export default AboutUs;
