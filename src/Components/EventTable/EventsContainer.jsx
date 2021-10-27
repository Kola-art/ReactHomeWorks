import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { ButtonCreator } from '../UI';
import SearchEvent from '../ParticipantsTable/Search/SearchEvent';
import { Link } from 'react-router-dom';
import CompetitionCreate from '../CompetitionCreate/CompetitionCreate';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
  border: '2px solid yellow',
  fontSize: '15px'
}));


function EventsContainer () {

  const filteredEvents = useSelector(state => state.filteredEvents);
  return (
    <>
      <SearchEvent />
      <Grid container spacing={2} >
        {
          filteredEvents && filteredEvents.map(event => {
            return (
              <Grid item xs={4} key={event.id}>
                <Item>
                  <Typography component='p' sx={{fontWeight: 700 }}> 
                    ID: {event.id}
                  </Typography>
                  <Typography component='p' sx={{fontWeight: 700, mt:1}}> 
                    Name: {event.name}
                  </Typography>
                  <Typography component='p' sx={{fontWeight: 700, mt:1, mb:1}}> 
                    Status: {event.status ? 'finished' : 'active'}
                  </Typography>
                  {
                    event.status && <Typography component='p' sx={{fontWeight: 700, mt:1, mb:1}}> 
                    Winner: {event.winner.firstName} {event.winner.secondName}
                    </Typography>
                  }
                  <Box sx={{ textAlign: 'center', mt:2}}>
                    <ButtonCreator view="contained" bg='warning' type='button'>
                      <Link style={{textDecoration: 'none'}} to={`/competition/${event.id}`}> Show </Link>
                    </ButtonCreator>
                  </Box>
                </Item>
              </Grid>
            );
          })
        }
      </Grid>
      <CompetitionCreate />
    </>
  );
 
}

export default EventsContainer;