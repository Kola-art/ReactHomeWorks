import axios from 'axios';

export const API = 'http://localhost:4000/';

const api = axios.create({
  baseURL: API
});

export function getParticipants(){
  return api.get('/users');
}
