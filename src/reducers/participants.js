import { ADD_PARTICIPANT, FETCH_PARTICIPANT_SUCCESS, SET_PARTICIPANT, DELETE_PARTICIPANT, FILTER_PARTICIPANTS, WINNER } from '../actions';
export const initialState = {
  participants: [],
  winner: null,
  showWinner: false
};

export function participantsReducer (state = initialState, action) {
  switch(action.type) {
  case FETCH_PARTICIPANT_SUCCESS: 
    return {
      ...state,
      participants: [...state.participants, ...action.payload],
    };
  case SET_PARTICIPANT: 
    return {
      ...state,
      participants: [...action.payload],
    };
  case ADD_PARTICIPANT: 
    return {
      ...state,
      participants: [...state.participants, action.payload]
    };
  case DELETE_PARTICIPANT:
    return {
      ...state,
      participants: state.participants.filter(participant => participant.id !== action.payload) 
    };  
  case FILTER_PARTICIPANTS:
    return {
      ...state,
      filteredParticipants: state.participants.filter(participant => {
        return ( participant.firstName.toLowerCase().includes(action.payload.toLowerCase())
         || participant.id.toLowerCase().includes(action.payload.toLowerCase()) );
      }),
    };
  case WINNER:
    return {
      ...state,
      winner: state.participants.reduce((accum, item) => { (accum.counter > item.counter) ? (accum = item) : accum; return accum; }),
      showWinner: true
    };
  default:
    return state;
  }

}