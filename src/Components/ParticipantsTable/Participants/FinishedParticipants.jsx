import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteParticipant } from '../../../actions';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { ButtonCreator } from '../../UI';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
  border: '2px solid yellow',
  fontSize: '15px'
}));

function Participants({event}) {
  const dispatch = useDispatch();
  const filteredCompetition = useSelector(state => state.events);
  const competition = filteredCompetition.filter(competition => competition.id === event[0].id);
  const delParticipant = (eventId, participantId ) => {
    dispatch(deleteParticipant(eventId, participantId));
  };
  console.log(competition);
  return (
    <Grid container spacing={2} >
      {
        competition[0].participants.map(participant => {
          return (
            <Grid item xs={4} key={participant.id}>
              <Item>
                <Typography component='p' sx={{fontWeight: 700 }}> 
                  ID: {participant.id}
                </Typography>
                <Typography component='p' sx={{fontWeight: 700, mt:1}}> 
                  NAME: {participant.firstName}
                </Typography>
                <Typography component='p' sx={{fontWeight: 700, mt:1, mb:1}}> 
                  TIME: {participant.pastTime}
                </Typography>
                <Box sx={{ textAlign: 'center', mt:2}}>
                  <ButtonCreator view="contained" bg='warning' onClick={ () => delParticipant(event[0].id, participant.id)} type='button'>Delete</ButtonCreator>
                </Box>
              </Item>
            </Grid>
          );
        })
      }
    </Grid>
  );

}

Participants.propTypes = {
  event: PropTypes.array, 
};

export default Participants;