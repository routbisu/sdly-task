import styled from 'styled-components';

const BannerSection = styled.div`
  background: url('https://f.seedly.sg/site_header/default_desktop.svg')
    no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 280px;
  position: relative;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.white};
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
      padding-bottom: 20px;
    }

    h2 {
      padding-bottom: 22px;
    }
  }
`;

export default BannerSection;
