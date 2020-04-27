import { SET_FEATURED_TOPICS, SET_QUESTIONS } from '../actions/types';

const initialState = {
  questions: [],
  featuredTopics: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEATURED_TOPICS:
      return {
        ...state,
        featuredTopics: [...action.payload],
      };

    case SET_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload],
      };

    default:
      return state;
  }
};

export default questionReducer;
