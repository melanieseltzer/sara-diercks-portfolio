// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

export default () => <Footer>Footer goes here</Footer>;

const Footer = styled.footer`
  background: ${COLORS.gray.dark};
  color: ${COLORS.black};
  height: auto;
  padding: 100px 0;
  text-align: left;
`;
