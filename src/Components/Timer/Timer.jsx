import React from 'react';
import TimeControls from './TimeControls/TimeControls';
import TimeTable from './TimeTable/TimeTable';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function Timer({isGoing, setIsGoing, time, setTime}) {
      
  return(
    <Box sx={{mt:3}}>
      <TimeTable time={time} setTime={setTime} isGoing={isGoing} />
      <TimeControls time={time} setTime={setTime} 
        isGoing={isGoing} setIsGoing={setIsGoing}
      />
    </Box>
  );
}
Timer.propTypes = {
  isGoing: PropTypes.object,
  setIsGoing: PropTypes.func,
  time: PropTypes.object,
  setTime: PropTypes.func
};
export default Timer;