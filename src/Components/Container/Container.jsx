import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    marginTop: '50px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Container className={styles.root} container='main' maxWidth='xs' {...props}> {children} </Container>
  );
};

MainContainer.propTypes = {
  children: PropTypes.any,
};
export default MainContainer;