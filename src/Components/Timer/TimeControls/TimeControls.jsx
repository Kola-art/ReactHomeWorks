import React from 'react';
import PropTypes from 'prop-types';
import { ButtonCreator } from '../../UI/';
import reset from '../../../assets/sound/reset.mp3';
import start from '../../../assets/sound/start.mp3';
import stop from '../../../assets/sound/stop.mp3';
import { soundPlay } from '../../../assets/sound';
import { Stack } from '@mui/material';

function TimeControls ({ time, setTime, isGoing, setIsGoing }) {

  const timeStarter = () => {
    setIsGoing({...isGoing, start: true, stop: false, isGoing: true});
    const src = start;
    soundPlay(src);
  };
  
  const timeStop = () => {
    if(time.pastTime === '00:00:00'){
      return;
    }
    const src = stop;
    soundPlay(src);
    setIsGoing({...isGoing, isGoing: false, stop: true, reset: false, save: false});
  };
   
  const timeReset = () => {
    const src = reset;
    soundPlay(src);
    setIsGoing({...isGoing, stop: true, reset: true, save: true, start: false});
    setTime({
      ...time,
      pastTime: '00:00:00',
      counter: 0
    });
    
  };


  return (
    <Stack direction="row" spacing={2} sx={{mt:1}}>
      <ButtonCreator disabled={isGoing.start} view="contained" bg='success' onClick={timeStarter} type='button'>Start</ButtonCreator>
      <ButtonCreator disabled={isGoing.stop} view="contained" bg='error' onClick={timeStop} type='button'>Stop</ButtonCreator>
      <ButtonCreator disabled={isGoing.reset} view="contained" bg='warning' onClick={timeReset} type='button'>Reset</ButtonCreator>
    </Stack>
  );
}

TimeControls.propTypes = {
  time: PropTypes.object, 
  setTime: PropTypes.func,
  isGoing: PropTypes.object,
  setIsGoing: PropTypes.func,
};

export default TimeControls;