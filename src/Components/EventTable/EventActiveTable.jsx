import React from 'react';
import ParticipantsTable from '../ParticipantsTable/ParticipantsTable';
import RegistrationTable from '../RegistrationTable/RegistrationTable';
import PropTypes from 'prop-types';
import BackToEvent from '../BackEvent/BackEvent';

function EventActiveTable ({event}) {
  
  return (
    <>
      <ParticipantsTable event={event} />
      <RegistrationTable event={event} />
      <BackToEvent />
    </>
  );  
}
EventActiveTable.propTypes = {
  event: PropTypes.array, 
};
export default EventActiveTable;