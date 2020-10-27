import axios from '../config/axios';

const getAll = (eventId: number) => {
  return axios.get(`/project/all?eventId=${eventId}`);
};

export default {
  getAll,
}
