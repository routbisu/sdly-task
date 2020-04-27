import { SET_FEATURED_TOPICS, SET_QUESTIONS } from './types';
import { getTopics, getQuestions } from '../services/datalayer';

export const fetchFeaturedTopics = () => async (dispatch) => {
  const topics = await getTopics();

  dispatch({
    type: SET_FEATURED_TOPICS,
    payload: topics,
  });
};

export const fetchQuestions = (topic) => async (dispatch) => {
  const questions = await getQuestions(topic);

  dispatch({
    type: SET_QUESTIONS,
    payload: questions,
  });
};
