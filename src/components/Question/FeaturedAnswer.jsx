import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  faShareAlt,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

const AnswerSection = styled.div`
  margin-top: 15px;
  color: ${(props) => props.theme.colors.dark};
  padding-right: 20px;
  font-size: 0.95rem;
  line-height: 1.8;

  .answer-text {
    p {
      margin-bottom: 10px;
    }

    &.covered {
      height: 115px;
      overflow: hidden;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 50px;
        background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.7)
        );
      }
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
      cursor: pointer;
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

      button.more {
        border: none;
        background: ${(props) => props.theme.colors.pageBg};
        padding: 5px 8px 5px 10px;
        border-radius: 2px;
        margin-right: 15px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.colors.primary};
          transition: 0.3s;
        }
        svg {
          font-size: 0.7rem;
          margin-left: 2px;
        }
      }
    }
  }
`;

const FeaturedAnswer = ({ answer, numAnswers }) => {
  const [hidden, setHidden] = useState(true);
  const [seeMoreBtn, setSeeMoreBtn] = useState(false);
  let answerRef = useRef();

  const toggleHidden = () => {
    setHidden((current) => !current);
  };

  useEffect(() => {
    if (answerRef.current.offsetHeight > 100) {
      setSeeMoreBtn(true);
    }
  }, []);

  return (
    <AnswerSection>
      <div
        className={`answer-text ${seeMoreBtn && hidden ? 'covered' : ''}`}
        ref={answerRef}
      >
        {answer.content && answer.content.map((ans, i) => <p key={i}>{ans}</p>)}
      </div>
      <div className="footer">
        <div className="num-answers">
          <FontAwesomeIcon icon={faCommentAlt} />
          {numAnswers} answer{numAnswers > 1 ? 's' : ''}
        </div>
        <div className="likes">
          {seeMoreBtn && (
            <button className="more" onClick={toggleHidden}>
              See {hidden ? 'More' : 'Less'}{' '}
              <FontAwesomeIcon icon={hidden ? faChevronDown : faChevronUp} />
            </button>
          )}
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>{answer.likes}</span>
          <FontAwesomeIcon icon={faShareAlt} />
        </div>
      </div>
    </AnswerSection>
  );
};

export default FeaturedAnswer;
