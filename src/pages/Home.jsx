import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question/Question.jsx';
import { fetchQuestions } from '../actions/questionActions.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const questions = useSelector((state) => state.questionState.questions);
  return (
    <div>
      {questions &&
        questions.map((question, i) => (
          <Question question={question} key={i} />
        ))}
    </div>
  );
};

export default Home;
