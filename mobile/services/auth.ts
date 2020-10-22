import axios from '../config/axios';

const login = (email: string, password: string) => {
  return axios.post('auth/login', { email, password });
};

export default {
  login
}
