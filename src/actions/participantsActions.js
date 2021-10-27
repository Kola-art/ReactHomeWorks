export const ADD_PARTICIPANT = 'add participant';
export const FETCH_PARTICIPANTS = 'fetch participant';
export const FETCH_PARTICIPANT_SUCCESS = 'fetch participant success';
export const DELETE_PARTICIPANT = 'delete participant';
export const FILTER_PARTICIPANTS = 'filter participant';
export const FILTER_EVENTS = 'filter events';
export const WINNER = 'winner';
export const CREATE_COMPETITION = 'create competition';

export const addParticipant = (name, time, eventId) => {
  const data = {...name, ...time};
  return {type: ADD_PARTICIPANT, payload: {data, eventId } };
};

export const fetchParticipantSuccess = (events) => ({
  type: FETCH_PARTICIPANT_SUCCESS,
  payload: events
});

export const deleteParticipant = (eventId, participantId) => ({
  type: DELETE_PARTICIPANT,
  payload: {eventId, participantId}
});

export const filterParticipant = (text, eventId) => ({
  type: FILTER_PARTICIPANTS,
  payload: {text, eventId}
});

export const winnerAction = (eventId) => ({
  type: WINNER,
  payload: eventId
});

export const filterEvents = (text) => ({
  type: FILTER_EVENTS,
  payload: text
});

export const createCompetition = (data) => {
  return{
    type: CREATE_COMPETITION,
    payload: data
  };
};
