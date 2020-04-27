import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question/Question.jsx';
import { fetchQuestions } from '../actions/questionActions.js';

const Topic = () => {
  const dispatch = useDispatch();

  // Read topic from url param
  let { tag } = useParams();

  useEffect(() => {
    dispatch(fetchQuestions(tag));
  }, [tag, dispatch]);

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

export default Topic;
