import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';


const PageButton = ({ children, type, onClick }) => {
 
  return (
    <Button variant='contained' onClick={onClick} color='primary' size='large' type={type}>
      {children}
    </Button>
  );
};
PageButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes. string,
  onClick: PropTypes.func,
};

export default PageButton;