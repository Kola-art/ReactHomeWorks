import React, { useState } from 'react';
import TimeControls from './TimeControls/TimeControls';
import TimeList from './TimeList/TimeList';
import TimeTable from './TimeTable/TimeTable';

function Timer() {
  const [time, setTime] = useState('00 : 00 : 00 : 0000');
  const [milisec, setMilisec] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isGoing, setIsGoing] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);

  return(
    <div>
      <TimeTable sec={sec} setSec={setSec} 
        min={min} setMin={setMin} hour={hour} setHour={setHour} time={time} 
        setTime={setTime} milisec={milisec} setMilisec={setMilisec} isGoing={isGoing} />
      <TimeControls setSec={setSec} setMin={setMin} setHour={setHour} 
        time={time} setTime={setTime} setMilisec={setMilisec} 
        isGoing={isGoing} setIsGoing={setIsGoing} showContinue={showContinue} setShowContinue={setShowContinue} 
        timeSlots={timeSlots} setTimeSlots={setTimeSlots} />
      <TimeList timeSlots={timeSlots} setTimeSlots={setTimeSlots} />     
    </div>
  );
}

export default Timer;