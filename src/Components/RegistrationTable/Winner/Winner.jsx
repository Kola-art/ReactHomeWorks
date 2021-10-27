import React from 'react';
import WinnerTitle from './WinnerTitle';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const styles = {
  marginTop: '30px',
  padding: '30px 0 30px',
  border: '3px solid yellow',
  textAlign: 'center',
  fontWeight: 700
};

function Winner({event}) {
  return (
    <Box sx={styles}>
      <WinnerTitle event={event} />
    </Box>
  );
}
Winner.propTypes = {
  event: PropTypes.array, 
};
export default Winner;