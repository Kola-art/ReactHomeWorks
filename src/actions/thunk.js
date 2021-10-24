import { fetchParticipantSuccess } from './participantsActions';
import { getParticipants } from '../api/index';

export const fetchParticipants = () => {
  return async (dispatch) => {
    let participants = await Promise.resolve(getParticipants());
    let participantArr = participants.data.map(participant => participant);
    dispatch(fetchParticipantSuccess(participantArr));
  };
};