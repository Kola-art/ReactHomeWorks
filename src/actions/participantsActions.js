export const ADD_PARTICIPANT = 'add participant';
export const SET_PARTICIPANT = 'set participant';
export const FETCH_PARTICIPANTS = 'fetch participant';
export const FETCH_PARTICIPANT_SUCCESS = 'fetch participant success';
export const DELETE_PARTICIPANT = 'delete participant';
export const FILTER_PARTICIPANTS = 'filter participant';
export const WINNER = 'winner';

export const addParticipant = (name, time) => ({
  type: ADD_PARTICIPANT,
  payload: {...name, ...time} 
});

export const fetchParticipantSuccess = (participants) => ({
  type: FETCH_PARTICIPANT_SUCCESS,
  payload: participants
});

export const setParticipant = (participants) => ({
  type: SET_PARTICIPANT,
  payload: participants
});

export const deleteParticipant = (id) => ({
  type: DELETE_PARTICIPANT,
  payload: id
});

export const filterParticipant = (text) => ({
  type: FILTER_PARTICIPANTS,
  payload: text
});

export const winnerAction = () => ({
  type: WINNER
});