import React from 'react';
import styled from 'styled-components';
import FeaturedAnswer from './FeaturedAnswer';
import { NavLink } from 'react-router-dom';

const QuestionSection = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 15px;

  .tags {
    .tag {
      display: inline-block;
      color: rgb(154, 161, 179);
      background: rgb(244, 245, 246);
      padding: 7px 15px;
      margin-right: 8px;
      border-radius: 3px;
      font-size: 0.85rem;
      cursor: pointer;
      &:hover {
        background: rgb(221, 234, 255);
        color: rgb(40, 111, 220);
      }
    }
  }

  h2 {
    margin-top: 12px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.dark};
    font-weight: bold;
  }

  .author-profile {
    margin-top: 12px;
    display: flex;
    align-items: center;

    img {
      width: 40px;
      border-radius: 50%;
    }

    .info {
      margin-left: 10px;
      .name {
        color: ${(props) => props.theme.colors.dark};
        font-size: 0.9rem;
      }
      .about {
        margin-top: 7px;
        font-size: 0.9rem;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
        span {
          padding-left: 5px;
          font-weight: 400;
          font-size: 0.85rem;
          color: ${(props) => props.theme.colors.grey};
        }
      }
    }
  }
`;

const AuthorProfile = ({ author, ansTime }) => {
  if (!author) return null;
  let timeStr = null;

  if (ansTime) {
    const diff = new Date().getTime() - new Date(ansTime).getTime();
    const hrs = Math.round(diff / (1000 * 3600));

    if (hrs < 24) {
      timeStr = `${hrs}h`;
    } else {
      timeStr = `${Math.round(hrs / 24)}d`;
    }
  }

  return (
    <div className="author-profile">
      <img src={author.profile} alt={author.name} />
      <div className="info">
        <div className="name">{author.name}</div>
        <div className="about">
          {author.level}
          {timeStr && <span>Answered {timeStr} ago</span>}
        </div>
      </div>
    </div>
  );
};

const Question = ({ question }) => {
  if (!question) return null;

  const { topics, question: qs, answers } = question;
  // Find featured answer
  const featuredAnswer = answers.find((ans) => ans.featured);

  return (
    <QuestionSection>
      {topics && (
        <div className="tags">
          {topics.map((topic, i) => (
            <NavLink to={`/topic/${topic}`} className="tag" key={i}>
              {topic}
            </NavLink>
          ))}
        </div>
      )}
      <h2>{qs}</h2>
      {featuredAnswer && (
        <>
          <AuthorProfile
            author={featuredAnswer.author}
            ansTime={featuredAnswer.time}
          />
          <FeaturedAnswer answer={featuredAnswer} numAnswers={answers.length} />
        </>
      )}
    </QuestionSection>
  );
};

export default Question;
