import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const style = {
  color: 'goldenrod',
  fontSize: '35px',
  fontWeight: '700'
};

function TimeTable ({ time, setTime, isGoing }) {
  const tick = () => setInterval(() => {
    setTime((prev) => {
      let secs = Math.floor(prev.counter % 60).toString();
      let mins = Math.floor((prev.counter / 60) % 60).toString();
      let hours = Math.floor((prev.counter / 3600) % 24).toString();
      let showTime = `${hours.padStart(2, '0')}:${mins.padStart(2,'0')}:${secs.padStart(2, '0')}`;
      return {
        pastTime: showTime,
        counter: prev.counter + 1,
      };
    });
  }, 1000);
  
  useEffect(()=>{
    let timerId = null;
    if(isGoing.isGoing) {
      timerId = tick();
    }
    return () => { clearInterval(timerId); };
  },[isGoing.isGoing]);
  return  (
    <Box sx={style}>
      {time.pastTime}
    </Box>
  );
}

TimeTable.propTypes = {
  time: PropTypes.object, 
  setTime: PropTypes.func,
  isGoing: PropTypes.object
};

export default TimeTable;