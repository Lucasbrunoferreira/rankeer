import axios from 'config/axios';
import { BusinessModel } from 'interfaces/BusinessModel';

const getProject = (eventId: number) => {
  return axios.get('project', { params: { eventId } });
};

const createProject = (name: string, eventId: number) => {
  return axios.post('project', { name, eventId });
};

const updateProject = (projectId: number, data: {
  name?: string,
  description?: string,
  color?: string,
  impactPhrase?: string,
  annotations?: string }) => {
  return axios.put(`project/${projectId}`, data);
};

const saveTag = (projectId: number, description: string) => {
  return axios.post(`project/${projectId}/tag`, { description });
}

const removeTag = (tagId: number) => {
  return axios.delete(`project/tag/${tagId}`);
}

const saveTask= (projectId: number, description: string) => {
  return axios.post(`project/${projectId}/task`, { description });
}

const setDoneTask = (taskId: number) => {
  return axios.put(`project/task/${taskId}/done`);
}

const setUnDoneTask = (taskId: number) => {
  return axios.put(`project/task/${taskId}/unDone`);
}

const saveLink = (projectId: number, description: string) => {
  return axios.post(`project/${projectId}/link`, { description });
}

const saveBusinessModel = (projectId: number, data: BusinessModel) => {
  return axios.post(`project/${projectId}/businessModel`, data);
}

const inviteMember = (projectId: number, email: string) => {
  return axios.post(`project/${projectId}/invite`, { email });
}

export default {
  getProject,
  createProject,
  updateProject,
  saveTag,
  removeTag,
  saveTask,
  setDoneTask,
  setUnDoneTask,
  saveLink,
  saveBusinessModel,
  inviteMember
}
