import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '10px'
  }
});

const Form = ({children, ...props}) => {
  const styles = useStyles();
  return (
    <form noValidate {...props} className={styles.root}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.any,
};

export default Form;