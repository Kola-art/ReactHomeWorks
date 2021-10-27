import { ADD_PARTICIPANT, FETCH_PARTICIPANT_SUCCESS, DELETE_PARTICIPANT, FILTER_PARTICIPANTS, WINNER, FILTER_EVENTS, CREATE_COMPETITION } from '../actions';
export const initialState = {
  events: [],
};

export function participantsReducer (state = initialState, action) {
  switch(action.type) {
  case FETCH_PARTICIPANT_SUCCESS: 
    return {
      ...state,
      events: [...state.events, ...action.payload],
    };
  case CREATE_COMPETITION:
    return {
      ...state,
      events: [...state.events, action.payload]
    };
  case FILTER_EVENTS:
    return {
      ...state,
      filteredEvents: state.events.filter(event => event.name.toLowerCase().includes(action.payload.toLowerCase()))
    };
  case ADD_PARTICIPANT: 
    return {
      ...state,
      events: state.events.map( event => {
        if(event.id === action.payload.eventId) {
          event.participants = [...event.participants, action.payload.data];
          return event;
        }
        return event;
      })
    };
  case DELETE_PARTICIPANT:
    return {
      ...state,
      events: state.events.map( event => {
        if(event.id === action.payload.eventId) {
          event.participants = event.participants.filter(participant => {
            if(participant.id !== action.payload.participantId) { 
              return participant;
            }
          }
          );
          return event;
        }
        return event;
      })
    };  
  case FILTER_PARTICIPANTS:
    return {
      ...state,
      events: state.events.map( event => {
        if(event.id === action.payload.eventId) {
          event.filteredParticipants = event.participants.filter((participant) => { 
            return participant.firstName.toLowerCase().includes(action.payload.text.toLowerCase())
            || participant.id.toLowerCase().includes(action.payload.text.toLowerCase());
          });
          return event;
        }
        return event;
      })
    };
  case WINNER:
    return {
      ...state,
      events: state.events.map( event => {
        if(event.id === action.payload) {
          event.winner = event.participants.reduce((accum, item) => { (accum.counter > item.counter) ? (accum = item) : accum; return accum; });
          event.status = true;
          return event;
        }
        return event;
      })
    };
  default:
    return state;
  }
}