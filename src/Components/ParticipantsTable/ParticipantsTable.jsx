import React from 'react';
import Participants from './Participants/Participants';
import SearchFunc from './Search/Search';
import Box from '@mui/material/Box';

function ParticipantsTable () {
  return(
    <Box  sx={{width: '55%'}}>
      <SearchFunc /> 
      <Participants /> 
    </Box>
  );
}

export default ParticipantsTable;