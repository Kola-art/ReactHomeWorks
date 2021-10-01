import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function TimeList({timeSlots, setTimeSlots}) {
  useEffect(()=>{
    if (localStorage.getItem('times')) {
      setTimeSlots(() => {
        let content = [];
        let data = JSON.parse(localStorage.getItem('times'));
        for (let key in data) {
          content.push(data[key]);
        }
        return content;
      });
    }
  }, []);

  const drawTime = (timeSlot) => {
    let content = [];
    for (let value in timeSlot){
      content.push(timeSlot[value]);
    }
    return content;
  };

  return (
    <div>
      { timeSlots &&
        drawTime(timeSlots).map((slot, idx) => {
          return <p className="list" key={idx}>{slot}</p>;
        })
      }  
    </div>
  );
}
TimeList.propTypes = {
  timeSlots: PropTypes.array,
  setTimeSlots: PropTypes.func
};
export default TimeList;