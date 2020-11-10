import axios from '../config/axios';
import { Evaluation } from '../interfaces/Evaluation';

const sendEvaluation = (project_id: number, evaluator_id: number, evaluation: Evaluation) => {
  return axios.post('evaluation', { project_id, evaluator_id, ...evaluation });
};

export default {
  sendEvaluation,
}
