import React from 'react';
import { useDispatch } from 'react-redux';
import { winnerAction } from '../../../actions';
import { Typography } from '@mui/material';
import { ButtonCreator } from '../../UI';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

function WinnerTitle({event}){
  const dispatch = useDispatch();
  const history = useHistory();
  const { competitionId } = useParams();

  const handlerclick = () => {
    dispatch(winnerAction(competitionId));
    history.push('/');
  };
  return (
    <>
      <Typography component='h3' variant="h4" sx={{marginBottom: 3}}>
        Total participants: {event[0].participants.length}
      </Typography>
      <ButtonCreator view="contained" bg='success' disabled={event[0].participants.length ? false : true} type='button' onClick={handlerclick}>Show winner</ButtonCreator>
    </>
  );
}
WinnerTitle.propTypes = {
  event: PropTypes.array, 
};
export default WinnerTitle;