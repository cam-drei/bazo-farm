const styles = {
  footerContainer: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f1f1f1',
    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
    padding: '20px 0',
    textAlign: 'center',
    // marginTop: '20px',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerText: {
    marginBottom: '10px',
    color: '#333',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '24px',
    color: '#66BB6A',
    cursor: 'pointer',
    '&:hover': {
      color: '#4CAF50',
    },
  },
};

export default styles;
