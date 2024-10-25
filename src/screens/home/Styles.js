const styles = {
  container: {
    flex: 1,
  },
  homeContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    maxHeight: '500px',
    overflow: 'hidden',
    backgroundImage: `url(${require('../../assets/images/bamboo-background-2.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  centeredTextContainer: {
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '10px 20px 0px',
    borderRadius: '20px',
    width: '60%',
    textAlign: 'center',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'inherit',
  },
  introductionContainer: {
    margin: '50px 0',
    textAlign: 'center',
  },
  introductionText: {
    // fontWeight: 'bold',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    padding: '0 20px',
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  imageContainer: {
    textAlign: 'center',
    width: '30%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
  },
  imageTitle: {
    marginTop: '10px',
  },
  articlesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '40px',
  },
  articleBox: {
    width: '30%',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  articleImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  articleTitle: {
    marginBottom: '5px',
  },
  articleSnippet: {
    marginBottom: '10px',
  },
  seeMoreLink: {
    color: '#66BB6A',
    textDecoration: 'none',
  },
  explanatoryText: {
    margin: '20px 0',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default styles;
