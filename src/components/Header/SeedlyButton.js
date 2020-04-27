import styled from 'styled-components';

const SeedlyButton = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: bold;
  border-radius: 45px;
  margin: auto;
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 7px 20px;
  font-size: 1rem;

  ${({ jumbo }) =>
    jumbo &&
    `
    box-shadow: rgba(111, 111, 111, 0.5) 0px 2px 6px 0px;
    transition: all 0.5s ease 0s;
    text-transform: uppercase;
    width: 253px;
    padding: 14px 0px;
    font-size: 1.1rem;
    border: none;
    &:hover {
      transform: translateY(-3px);
    }
  `}
`;

export default SeedlyButton;
