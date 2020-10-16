import axios from 'config/axios';

const eventsParticipants = () => {
  return axios.get('events');
};

const getEventById = (eventId: number) => {
  return axios.get(`events/${eventId}`);
};

const participateByCode = (code: string) => {
  return axios.post('events/participate', { code });
};

export default {
  eventsParticipants,
  participateByCode,
  getEventById
}
