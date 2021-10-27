import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EventActiveTable from '../Components/EventTable/EventActiveTable';
import EventFinishedTable from '../Components/EventTable/EventFinishedTable';

function EventsPage() {
  const { competitionId } = useParams();
  const events = useSelector(state => state.events);
  const event = events.filter(event => event.id === competitionId);
  if(event.length > 0){
    return(
      <>
        {
          event[0].status ? <EventFinishedTable event={event} /> : <EventActiveTable event={event} />
        }
      </>
    );
  }
  else {
    return (<> </>);
  }
}

export default EventsPage;