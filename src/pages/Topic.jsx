import React from 'react';

const Topic = ({ match }) => {
  const tag = match?.params?.tag;

  return <div>{tag}</div>;
};

export default Topic;
