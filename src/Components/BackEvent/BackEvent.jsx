import React from 'react';
import Box from '@mui/material/Box';
import { ButtonCreator } from '../UI';
import { useHistory } from 'react-router-dom';

const styles = {
  btn: {
    marginTop: '10px',
    width: '100%',
    textAlign: 'center'
  }
};
function BackToEvent () {
  const history = useHistory();
  const handlerclick = () => {
    history.push('/');
  };
  return (
    <>
      <Box sx={styles.btn}>
        <ButtonCreator view="contained" bg='success' type='button' onClick={handlerclick} >Back to events</ButtonCreator>
      </Box>
    </>
  );  
}

export default BackToEvent;