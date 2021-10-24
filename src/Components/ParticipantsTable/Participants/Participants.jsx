import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

function Participants() {
  const dispatch = useDispatch();
  let participants = useSelector(store => store.participants);
  const filteredParticipants = useSelector(state => state.filteredParticipants);
  if(participants.length) {
    localStorage.setItem('Participants', JSON.stringify([...participants]));
  }

  const delParticipant = (id) => {
    dispatch(deleteParticipant(id));
    if((participants.length - 1) === 0){
      localStorage.removeItem('Participants');
    }
  };
 
  return (
    <Grid container spacing={2} >
      {
        filteredParticipants.map(participant => {
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
                  <ButtonCreator view="contained" bg='warning' onClick={ () => delParticipant(participant.id)} type='button'>Delete</ButtonCreator>
                </Box>
              </Item>
            </Grid>
          );
        })
      }
    </Grid>
  );

}
export default Participants;