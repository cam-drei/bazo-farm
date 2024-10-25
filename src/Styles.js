const styles = {
  container: {
    position: 'relative',
    top: '64px',
    marginTop: 0,
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: '80px',
  },
  contentWrapper: {
    flex: '1 0 auto',
    paddingBottom: '40px',
  },
  appBar: {
    backgroundColor: 'white',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '20px',
    justifyContent: 'space-between',
  },
  button: {
    color: 'black',
    fontSize: '18px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  logo: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    left: '50px',
    top: '80px',
    transform: 'translateY(-50%)',
    border: '3px solid black',
  },
  toolbar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: '220px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: '20px',
    padding: '0 10px',
    height: '40px',
    marginLeft: '20px',
  },
  input: {
    flex: 1,
    marginLeft: '10px',
    color: 'inherit',
  },
  iconButton: {
    padding: '10px',
    color: 'black',
  },
  languageButton: {
    color: 'black',
    marginLeft: '20px',
  },
};

export default styles;
