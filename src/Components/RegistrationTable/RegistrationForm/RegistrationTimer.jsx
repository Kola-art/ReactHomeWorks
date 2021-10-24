import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Timer from '../../Timer/Timer';
import Title from './Title';
import Saver from './Saver';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transform: 'translate(-50%, -80%)',
  minWidth: '300px',
  bgcolor: 'background.paper',
  border: '2px solid yellow',
  borderRadius: '15px',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
};

function RegistrationTimer({ name, setName }) {
  const [isGoing, setIsGoing] = useState({
    isGoing: false,
    start: false,
    stop: true,
    reset: true,
    cancel: false,
    save: true
  });
  const [time, setTime] = useState({
    pastTime: '00:00:00',
    counter: 0
  });
    
  return(
    <>
      <Modal
        open={name.openRegistry}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title name={name} />
          <Timer isGoing={isGoing} setIsGoing={setIsGoing} time={time} setTime={setTime} />
          <Saver isGoing={isGoing} name={name} setName={setName} setIsGoing={setIsGoing} time={time} setTime={setTime} />
        </Box>
      </Modal>
    </>
  );
}

RegistrationTimer.propTypes = {
  name: PropTypes.object, 
  setName: PropTypes.func,
};


export default RegistrationTimer;