import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { ButtonCreator } from '../UI';

const styles = {
  width: '100%',
  textAlign: 'right',
  marginTop: '35px'
};

function CompetitionCreate() {
  return (
    <Box sx={styles} component='div' >
      <ButtonCreator view="contained" bg='success' type='button'>
        <Link to='/create' style={{textDecoration: 'none', color: 'red'}}> Create competition </Link>
      </ButtonCreator>
    </Box>
  );
}

export default CompetitionCreate;