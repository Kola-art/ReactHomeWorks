import React from 'react';
import Participants from './Participants/Participants';
import SearchFunc from './Search/Search';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function ParticipantsTable ({event}) {
  return(
    <Box  sx={{width: '55%'}}>
      <SearchFunc event={event} /> 
      <Participants event={event} /> 
    </Box>
  );
}
ParticipantsTable.propTypes = {
  event: PropTypes.array, 
};
export default ParticipantsTable;