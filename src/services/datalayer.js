import axios from 'axios';
import { apiDetails } from '../config';
const { baseUrl } = apiDetails;

// Get questions from API endpoint
export const getQuestions = async (topic) => {
  let url = `${baseUrl}/questions`;
  if (topic) {
    url += `?topic=${topic}`;
  }
  const { data } = await axios.get(url);
  return data;
};

// Get feature topics from API endpoint
export const getTopics = async () => {
  const url = `${baseUrl}/topics`;
  const { data } = await axios.get(url);
  return data;
};
