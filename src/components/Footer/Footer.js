// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { COLORS, maxContainerWidth } from '../../constants';

const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sara-diercks-623857a7/',
    icon: faLinkedin
  },
  {
    name: 'GitHub',
    link: 'https://github.com/saradiercks',
    icon: faGithub
  },
  {
    name: 'Email',
    link: 'mailto:s.diercks31@gmail.com',
    icon: faEnvelope
  }
];

const Footer = () => (
  <FooterStyled>
    <Container>
      {socials.map(social => (
        <IconLink
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <Icon size="lg" icon={social.icon} />
        </IconLink>
      ))}
      <Info>{`Copyright © ${new Date().getFullYear()} Sara Diercks`}</Info>
    </Container>
  </FooterStyled>
);

export default Footer;

const FooterStyled = styled.footer`
  background: ${COLORS.gray.dark};
  color: ${COLORS.black.light};
  height: auto;
  padding: 20px 0 10px 0;
  text-align: left;
`;

const Container = styled.div`
  max-width: ${maxContainerWidth};
  margin: 0 20px;
  text-align: center;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;

const IconLink = styled.a`
  display: inline-block;
  margin-left: 20px;
  transition: 0.3s ease;
  &:first-child {
    margin-left: 0;
  }
  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${COLORS.black.light};
`;

const Info = styled.p`
  font-family: 'Lora', serif;
  font-size: 0.9rem;
  font-style: italic;
  margin: 10px 0 0 0;
`;
