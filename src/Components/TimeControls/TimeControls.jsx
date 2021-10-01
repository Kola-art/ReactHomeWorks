import React from 'react';
import PropTypes from 'prop-types';
import ButtonCreator from './Button/Button';
import reset from './sound/reset.mp3';
import start from './sound/start.mp3';
import stop from './sound/stop.mp3';
import { Howl } from 'howler';

function TimeControls ({ time, setTime, setMilisec, setSec, setMin, setHour, 
  isGoing, setIsGoing, showContinue, setShowContinue, timeSlots, setTimeSlots}) {
 
  const timeStarter = (event) => {
    if (event.target.innerHTML === 'Stop') {
      const src = stop;
      soundPlay(src);
      if(!isGoing) {
        return;
      }
      setIsGoing(false);
      setShowContinue(true);
      setTimeSlots([...timeSlots, time ]);
      localStorage.setItem('times', JSON.stringify({...timeSlots, time}));
    }
    else if (event.target.innerHTML === 'Start' || event.target.innerHTML === 'Continue') {
      setIsGoing(true);
      const src = start;
      soundPlay(src);
    }
    if (event.target.innerHTML === 'Continue') {
      setShowContinue(false);
    }
  };
  
  const timeReset = () => {
    const src = reset;
    soundPlay(src);
    if (time === '00 : 00 : 00 : 0000') {
      return;
    } else if (!isGoing) {
      setShowContinue(false);
      setTime('00 : 00 : 00 : 0000');
      setHour(0);
      setMin(0);
      setSec(0);
      setMilisec(0);
    } else {
      setTimeSlots([...timeSlots, time ]);
      localStorage.setItem('times', JSON.stringify({...timeSlots, time}));
      setIsGoing(false);
      setTime('00 : 00 : 00 : 0000');
      setShowContinue(false);
      setHour(0);
      setMin(0);
      setSec(0);
      setMilisec(0);
    }
  };

  const soundPlay = (src) => {
    const sound = new Howl({
      src
    });
    sound.play();
  };

  return (
    <div className="timeControls">
      <ButtonCreator bg='green' onClick={timeStarter}>{showContinue ? 'Continue' : 'Start'}</ButtonCreator>
      <ButtonCreator bg='red' onClick={timeStarter}>Stop</ButtonCreator>
      <ButtonCreator bg='gray' onClick={timeReset}>Reset</ButtonCreator>
    </div>
  );
}

TimeControls.propTypes = {
  time: PropTypes.string, 
  setTime: PropTypes.func,
  setMilisec: PropTypes.func,
  setSec: PropTypes.func, 
  setMin: PropTypes.func, 
  setHour: PropTypes.func, 
  isGoing: PropTypes.bool,
  setIsGoing: PropTypes.func,
  showContinue: PropTypes.bool,
  setShowContinue: PropTypes.func,
  timeSlots: PropTypes.array,
  setTimeSlots: PropTypes.func
};

export default TimeControls;