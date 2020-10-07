import axios from 'config/axios';

const eventsParticipants = () => {
  return axios.get('events');
};

export default {
  eventsParticipants
}
