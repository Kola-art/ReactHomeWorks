import { fetchParticipantSuccess } from './participantsActions';
import { getParticipants } from '../api/index';

export const fetchParticipants = () => {
  return async (dispatch) => {
    let events = await Promise.resolve(getParticipants());
    let eventsArr = events.data.map(event => event);
    dispatch(fetchParticipantSuccess(eventsArr));
  };
};