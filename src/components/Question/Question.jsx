import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const QuestionSection = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding: 16px;

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

  .answer {
    margin-top: 15px;
    color: ${(props) => props.theme.colors.dark};
    padding-right: 20px;
    font-size: 0.95rem;
    line-height: 1.8;
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .footer {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;

    .num-answers {
      color: ${(props) => props.theme.colors.grey};
      font-size: 0.9rem;
      svg {
        margin-right: 7px;
      }
    }

    .likes {
      color: ${(props) => props.theme.colors.dark};
      svg {
        cursor: pointer;
        color: ${(props) => props.theme.colors.primary};
      }
      span {
        margin: 0px 10px;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
`;

const Question = () => {
  return (
    <QuestionSection>
      <div className="tags">
        <div className="tag">LifeStyle</div>
        <div className="tag">MeLion</div>
        <div className="tag">KrisFlyer</div>
      </div>
      <h2>
        Hi i’m a 20y/o student. i have studied investing but i’ve always
        hesitated. how do you find the courage to begin?
      </h2>
      <div className="author-profile">
        <img
          size="36"
          src="https://graph.facebook.com/2540542656000956/picture?type=square"
          alt="Daniel Lim"
        ></img>
        <div className="info">
          <div className="name">Daniel Lim</div>
          <div className="about">
            Level 3 Wonderkid <span>Answered 13 day ago</span>
          </div>
        </div>
      </div>
      <div className="answer">
        Investment is a craft. Not science. Not art. There are no absolutes. No
        one is more talented than the other from birth. It is through practice
        and constant valuation that you can grow your craft. Imagine it as
        cooking. You can read as many cook ...{' '}
        <span className="more">(more)</span>
      </div>
      <div className="footer">
        <div className="num-answers">
          <FontAwesomeIcon icon={faCommentAlt} />
          132 answers
        </div>
        <div className="likes">
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>8</span>
          <FontAwesomeIcon icon={faShareAlt} />
        </div>
      </div>
    </QuestionSection>
  );
};

export default Question;
