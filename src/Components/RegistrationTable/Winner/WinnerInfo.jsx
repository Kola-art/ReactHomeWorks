import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

function WinnerInfo(){
  const { winner } = useSelector(state => state);
  return (
    <>
      <Typography component='h3' variant="h4" sx={{marginBottom: 3}}>
        The Winner
      </Typography>
      <Typography component='h3' variant="h5" sx={{marginBottom: 2}}>
        ID: {winner.id}
      </Typography>
      <Typography component='h3' variant="h5" sx={{marginBottom: 2}}>
        NAME: {winner.firstName}
      </Typography>
      <Typography component='h3' variant="h5" sx={{marginBottom: 2}}>
        TIME: {winner.pastTime}
      </Typography>
    </>
  );
}
export default WinnerInfo;