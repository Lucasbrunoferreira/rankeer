import axios from 'config/axios';

const gerResultsByEvent = (eventId: number) => {
  return axios.get(`evaluation/${eventId}`);
};

export default {
  gerResultsByEvent
}
