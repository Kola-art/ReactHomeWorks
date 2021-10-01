import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function TimeTable ({ time, setTime, milisec, setMilisec, sec, setSec, min, setMin, hour, setHour, isGoing }) {
  const tick = () => setInterval(() => {
    if (milisec === 1000) {
      setSec(prevSec => prevSec + 1);
      setMilisec(0);
    }
    else {
      setMilisec(prevMilisec => prevMilisec + 1);
    }
    if(sec === 60) {
      setSec(0);
      setMin(prevMin => prevMin + 1);
    }
    if(min === 60) {
      setHour(prevHour => prevHour + 1);
      setMin(0);
    }
    setTime(`${hour < 10 ? '0' + hour : hour} : ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec} : ${milisec < 10 ? '000' + milisec : milisec < 100 ?  '00' + milisec : milisec < 1000 ?  '0' + milisec : milisec}`);
  }, 1);
  
  useEffect(()=>{
    let timerId = null;
    if(isGoing) {
      timerId = tick();
    }
    return () => { clearInterval(timerId); };
  });
  return  (
    <div className="timeTable">
      {time}
    </div>
  );
}

TimeTable.propTypes = {
  time: PropTypes.string, 
  setTime: PropTypes.func,
  milisec: PropTypes.number, 
  setMilisec: PropTypes.func,
  sec: PropTypes.number, 
  setSec: PropTypes.func, 
  min: PropTypes.number, 
  setMin: PropTypes.func, 
  hour: PropTypes.number, 
  setHour: PropTypes.func, 
  isGoing: PropTypes.bool
};

export default TimeTable;