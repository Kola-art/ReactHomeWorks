import React from 'react';
import { useDispatch } from 'react-redux';
import { addParticipant } from '../../../actions';
import { Stack } from '@mui/material';
import { ButtonCreator } from '../../UI';
import PropTypes from 'prop-types';
import cancelSound from '../../../assets/sound/cancel.mp3';
import apply from '../../../assets/sound/apply.mp3';
import { soundPlay } from '../../../assets/sound';
import { recoverState } from '../../../utils';
import { useParams } from 'react-router-dom';

function Saver({isGoing, setIsGoing, setTime, time, setName, name }) {
  const dispatch = useDispatch();
  const { competitionId } = useParams();
  const cancel = () => {
    const src = cancelSound;
    soundPlay(src);
    recoverState(time, setTime, setName, name, setIsGoing, isGoing );
  };

  const save = () => {
    if(time.pastTime === '00 : 00 : 00'){
      return;
    }
    dispatch(addParticipant(name, time, competitionId));
    const src = apply;
    soundPlay(src);
    recoverState(time, setTime, setName, name, setIsGoing, isGoing );
  };

  return (
    <Stack direction="row" sx={{mt:4, justifyContent:'space-between', width: '100%'}}>
      <ButtonCreator onClick={cancel} disabled={isGoing.cancel} view="outlined" bg='secondary' size="large" type='button'>Cancel</ButtonCreator>
      <ButtonCreator onClick={save} disabled={isGoing.save} view="outlined" bg='success' size="large" type='button'>Save</ButtonCreator>
    </Stack>
  );
}

Saver.propTypes = {
  time: PropTypes.object, 
  setTime: PropTypes.func,
  isGoing: PropTypes.object,
  setIsGoing: PropTypes.func,
  setName: PropTypes.func,
  name: PropTypes.object, 
};
export default Saver;