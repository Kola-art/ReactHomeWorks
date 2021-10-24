import React from 'react';
import Box from '@mui/material/Box';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Winner from './Winner/Winner';

function RegistrationTable () {
  return(
    <Box sx={{ width: '40%' }}>
      <RegistrationForm />
      <Winner />
    </Box >
  );
}

export default RegistrationTable;