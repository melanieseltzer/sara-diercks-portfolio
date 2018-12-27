// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { COLORS, maxContainerWidth } from '../../constants';

export default () => (
  <Footer>
    <Container>
      <Link
        href="https://github.com/saradiercks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="2x" icon={faGithub} />
      </Link>
      <Link
        href="mailto:s.diercks31@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="2x" icon={faEnvelope} />
      </Link>
    </Container>
  </Footer>
);

const Footer = styled.footer`
  background: ${COLORS.gray.dark};
  color: ${COLORS.black.light};
  height: auto;
  padding: 100px 0;
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

const Link = styled.a`
  margin-right: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${COLORS.black.light};
`;
