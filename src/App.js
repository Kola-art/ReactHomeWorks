import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchParticipants } from './actions';
import { Container } from '@mui/material';
import Routes from './Routes';


const styles = {
  marginTop: '20px',
  border: '4px solid green', 
  display: 'flex', 
  justifyContent: 'space-between', 
  flexWrap: 'wrap',
  padding: '40px'
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParticipants());
  },[]);

  return (
    <Container maxWidth="lg" sx={styles}> 
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
