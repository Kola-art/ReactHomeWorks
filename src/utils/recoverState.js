export function recoverState(time, setTime, setName, name, setIsGoing, isGoing ) {
  setIsGoing({
    ...isGoing, isGoing: false, start: false, 
    stop: true, reset: true, cancel: false, save: true
  });
  setName({
    ...name,
    openRegistry: false
  });
  setTime({
    ...time,
    pastTime: '00:00:00',
    counter: 0
  });
}