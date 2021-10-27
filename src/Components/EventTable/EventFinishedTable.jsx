import React from 'react';
import PropTypes from 'prop-types';
import Participants from '../ParticipantsTable/Participants/Participants';
import WinnerInfo from '../RegistrationTable/Winner/WinnerInfo';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BackToEvent from '../BackEvent/BackEvent';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
};

function EventFinishedTable ({ event }) {
  return (
    <Box sx={styles.box} component='div'>  
      <WinnerInfo event={event} />
      <Typography component='h3' variant="h4" sx={{marginBottom: 1, textAlign: 'center'}}>
       Participants
      </Typography>
      <Participants event={event} />
      <BackToEvent />
    </Box>
  );  
}

EventFinishedTable.propTypes = {
  event: PropTypes.array, 
};
export default EventFinishedTable;