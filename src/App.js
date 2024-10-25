import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, CssBaseline, Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Home from './screens/home/Home';
import Agriculture from './screens/agriculture/Agriculture';
import Tourism from './screens/tourism/Tourism';
import AboutUs from './screens/aboutUs/AboutUs';
import Detail from './screens/detail/Detail';
import styles from './Styles';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" style={styles.appBar}>
        <img src={require('./assets/images/BAZO-LOGO.jpg')} alt="Logo" style={styles.logo} />
        
        <Toolbar style={styles.toolbar}>
          <Button style={styles.button} color="inherit" component={Link} to="/">Trang chủ</Button>
          <Button style={styles.button} color="inherit" component={Link} to="/nong-nghiep">Nông nghiệp</Button>
          <Button style={styles.button} color="inherit" component={Link} to="/du-lich">Du lịch</Button>
          <Button style={styles.button} color="inherit" component={Link} to="/ve-chung-toi">Về chúng tôi</Button>
        
          <Box sx={{ flexGrow: 1 }} />

          <Box style={styles.search}>
            <InputBase placeholder="Search…" style={styles.input} />
            <IconButton type="submit" style={styles.iconButton}>
              <SearchIcon />
            </IconButton>
          </Box>

          <IconButton style={styles.languageButton}>
            <LanguageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container style={styles.pageContainer}>
        <Box style={styles.contentWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nong-nghiep" element={<Agriculture />} />
            <Route path="/du-lich" element={<Tourism />} />
            <Route path="/ve-chung-toi" element={<AboutUs />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </Box>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
