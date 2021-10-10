import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    fontSize: '40px',
    color: 'green',
    textShadow: '1px 1px light',
  }
});

const Header = () => {
  const styles = useStyles();
  return (
    <Typography className={styles.root} component="h1" variant="h3">First register form</Typography>
  );
};

export default Header;