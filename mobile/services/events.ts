import axios from '../config/axios';

const eventsToEvaluate = () => {
  return axios.get('events/evaluator');
};

export default {
  eventsToEvaluate,
}
