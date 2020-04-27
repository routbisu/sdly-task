import styled from 'styled-components';

const TopSection = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  height: 63px;

  .links {
    flex: 1;
    display: flex;
    align-items: center;
    a {
      margin-right: 25px;
      color: ${(props) => props.theme.colors.secondary};
      font-size: 0.9rem;
      font-weight: 700;

      img {
        height: 26px;
      }
    }
  }

  .join-section {
    display: flex;
    align-items: center;
    justify-content: center;

    .input-holder {
      position: relative;

      svg {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
      }

      input {
        margin-right: 15px;
        background: ${(props) => props.theme.colors.pageBg};
        border: none;
        padding: 10px 17px 10px 40px;
        border-radius: 4px;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.secondary};
        width: 130px;
        transition: 0.1s all ease-in-out;
        &:focus {
          width: 220px;
          transition: 0.1s all ease-in-out;
          & + svg {
            color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }
  }
`;

export default TopSection;
