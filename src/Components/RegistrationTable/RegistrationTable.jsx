import React from 'react';
import Box from '@mui/material/Box';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Winner from './Winner/Winner';
import PropTypes from 'prop-types';

function RegistrationTable ({event}) {
  return(
    <Box sx={{ width: '40%' }}>
      <RegistrationForm />
      <Winner event={event} />
    </Box >
  );
}
RegistrationTable.propTypes = {
  event: PropTypes.array, 
};
export default RegistrationTable;