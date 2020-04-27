import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  questionState: questionReducer,
});

export default rootReducer;
