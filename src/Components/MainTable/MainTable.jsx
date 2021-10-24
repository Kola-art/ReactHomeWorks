import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import ParticipantsTable from '../ParticipantsTable/ParticipantsTable';
import RegistrationTable from '../RegistrationTable/RegistrationTable';
import { useDispatch } from 'react-redux';
import { fetchParticipants, setParticipant } from '../../actions';

const styles = {
  marginTop: '20px',
  border: '4px solid green', 
  display: 'flex', 
  justifyContent: 'space-between', 
  flexWrap: 'wrap',
  padding: '40px'
};

function MainTable () {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('Participants')){
      let participants = JSON.parse(localStorage.getItem('Participants'));
      dispatch(setParticipant(participants));
    }
    else {
      dispatch(fetchParticipants());
    }
  },[]);

  return (
    <Container maxWidth="lg" sx={styles}> 
      <ParticipantsTable />
      <RegistrationTable />
    </Container>
  );  
}

export default MainTable;