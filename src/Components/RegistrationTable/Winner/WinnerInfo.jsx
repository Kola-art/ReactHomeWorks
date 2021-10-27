import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
  },
};

function WinnerInfo({event}){
  
  return (
    <Box sx={styles.box} component='div'>
      <Typography component='p' variant="p" sx={{marginBottom: 1}}>
        ID: {event[0].id}
      </Typography>
      <Typography component='p' variant="p" sx={{marginBottom: 1}}>
        NAME: {event[0].name}
      </Typography>
      <Typography component='p' variant="p" sx={{marginBottom: 1}}>
        WINNER: {event[0].winner.firstName} {event[0].winner.secondName}
      </Typography>
      <Typography component='p' variant="p" sx={{marginBottom: 1}}>
        TIME:  {event[0].winner.pastTime}
      </Typography>
    </Box>
  );
}

WinnerInfo.propTypes = {
  event: PropTypes.array, 
};
export default WinnerInfo;