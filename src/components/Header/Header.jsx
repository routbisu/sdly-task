import React from 'react';
import BannerSection from './BannerSection';
import TopSection from './TopSection';
import SeedlyButton from './SeedlyButton';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    text: 'Ask Community',
    slug: '/',
  },
  {
    text: 'Products',
    slug: '/',
  },
  {
    text: 'Content',
    slug: '/',
  },
  {
    text: 'Events',
    slug: '/',
  },
];

const HeaderSection = styled.header`
  background: ${(props) => props.theme.colors.white};
`;

const Header = () => {
  return (
    <HeaderSection>
      <TopSection>
        <div className="links">
          <a href="/">
            <img
              src="https://f.seedly.sg/logo/seedly-logo-blue.png"
              alt="Seedly Logo"
            />
          </a>
          {links.map((link, i) => (
            <a key={i} href={link.slug}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="join-section">
          <div className="input-holder">
            <input type="text" placeholder="Search for a topic" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <SeedlyButton>Join</SeedlyButton>
        </div>
      </TopSection>
      <BannerSection>
        <div className="content">
          <h1>Let's Talk Finance</h1>
          <h2>Ask for opinions and get answers from other Singaporeans.</h2>
          <SeedlyButton jumbo={true}>Ask a question</SeedlyButton>
        </div>
      </BannerSection>
    </HeaderSection>
  );
};

export default Header;
