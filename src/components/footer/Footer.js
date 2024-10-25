import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import styles from './Styles';

const Footer = () => {
  return (
    <Container style={styles.footerContainer}>
      <Box style={styles.footerContent}>
        <Typography variant="h6" component="div" style={styles.footerText}>
          Visit us at: 123 Bazo Farm Street, Agriculture City, Viet Nam
        </Typography>
        <Box style={styles.socialIcons}>
          <Facebook style={styles.icon} />
          <Instagram style={styles.icon} />
          <Twitter style={styles.icon} />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
