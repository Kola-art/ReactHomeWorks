import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { winnerAction } from '../../../actions';
import { Typography } from '@mui/material';
import { ButtonCreator } from '../../UI';


function WinnerTitle(){
  const dispatch = useDispatch();
  const { participants } = useSelector(state => state);
  return (
    <>
      <Typography component='h3' variant="h4" sx={{marginBottom: 3}}>
        Total participants: {participants.length}
      </Typography>
      <ButtonCreator view="contained" bg='success' disabled={participants.length ? false : true} type='button' onClick={() => dispatch(winnerAction())}>Show winner</ButtonCreator>
    </>
  );
}

export default WinnerTitle;