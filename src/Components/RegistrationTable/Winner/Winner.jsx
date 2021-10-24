import React from 'react';
import { useSelector } from 'react-redux';
import WinnerTitle from './WinnerTitle';
import WinnerInfo from './WinnerInfo';
import Box from '@mui/material/Box';

const styles = {
  marginTop: '30px',
  padding: '30px 0 30px',
  border: '3px solid yellow',
  textAlign: 'center',
  fontWeight: 700
};

function Winner() {
  const showWinner = useSelector(state => state.showWinner);
  return (
    <Box sx={styles}>
      {showWinner ? <WinnerInfo /> : <WinnerTitle /> }
    </Box>
  );
}

export default Winner;