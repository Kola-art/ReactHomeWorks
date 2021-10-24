import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function Title ({name}) {
  return (
    <>
      <Typography id="modal-modal-description" component='h2' variant="h5" sx={{ fontWeight: 900}}>
           Participant
      </Typography>
      <Typography id="modal-modal-description" component='p' sx={{ mt: 2, fontWeight: 700, fontSize: '20px'}}>
            ID: {name.id}
      </Typography>
      <Typography id="modal-modal-descriptions" component='p' sx={{ mt: 1, fontWeight: 700, fontSize: '20px' }}>
            Participant: {name.firstName} {name.secondName}
      </Typography>
    </>
  );
}
Title.propTypes = {
  name: PropTypes.object, 
  
};
export default Title;