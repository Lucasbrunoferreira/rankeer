import axios from 'config/axios';

const getProject = (eventId: number) => {
  return axios.get('project', { params: { eventId } });
};

const createProject = (name: string, eventId: number) => {
  return axios.post('project', { name, eventId });
};


export default {
  getProject,
  createProject,
}
