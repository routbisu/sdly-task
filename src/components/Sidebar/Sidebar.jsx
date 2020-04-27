import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarSection = styled.div`
  background: ${(props) => props.theme.colors.white};
  flex-basis: 200px;
  padding: 10px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.dark};

  a {
    color: ${(props) => props.theme.colors.dark};
    font-size: 1rem;
    display: block;
    padding: 12px 10px;
    &:hover,
    &.active {
      border-radius: 4px;
      background: ${(props) => props.theme.colors.pageBg};
      color: ${(props) => props.theme.colors.primary};
    }

    &.active {
      font-weight: 700;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1rem;
    padding: 12px 10px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarSection>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            All Questions
          </NavLink>
        </li>
      </ul>
      <h2>Featured Topics</h2>
      <ul>
        <li>
          <NavLink to="/gora">COVID-19</NavLink>
        </li>
        <li>
          <NavLink to="/gora">Payments</NavLink>
        </li>
        <li>
          <NavLink to="/gora">Robo-advisors</NavLink>
        </li>
      </ul>
    </SidebarSection>
  );
};

export default Sidebar;
