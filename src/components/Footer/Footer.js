// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { COLORS, maxContainerWidth } from '../../constants';

const Footer = () => (
  <FooterStyled>
    <Container>
      <IconLink
        href="https://www.linkedin.com/in/sara-diercks-623857a7/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Icon size="2x" icon={faLinkedin} />
      </IconLink>
      <IconLink
        href="https://github.com/saradiercks"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <Icon size="2x" icon={faGithub} />
      </IconLink>
      <IconLink
        href="mailto:s.diercks31@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <Icon size="2x" icon={faEnvelope} />
      </IconLink>
      <p>
        Designed &amp; Built by{' '}
        <a
          href="https://melanieseltzer.io"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Melanie Seltzer
        </a>
      </p>
    </Container>
  </FooterStyled>
);

export default Footer;

const FooterStyled = styled.footer`
  background: ${COLORS.gray.dark};
  color: ${COLORS.black.light};
  height: auto;
  padding: 50px 0;
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
  margin-right: 20px;
  transition: 0.3s ease;
  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${COLORS.black.light};
`;
