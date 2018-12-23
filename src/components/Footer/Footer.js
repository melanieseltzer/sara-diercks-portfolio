// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS, maxContainerWidth } from '../../constants';

export default () => (
  <Footer>
    <Container>Footer goes here</Container>
  </Footer>
);

const Footer = styled.footer`
  background: ${COLORS.gray.dark};
  color: ${COLORS.black};
  height: auto;
  padding: 100px 0;
  text-align: left;
`;

const Container = styled.div`
  max-width: ${maxContainerWidth};
  margin: 0 20px;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;
