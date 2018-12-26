// @flow
import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Nav from '../Nav';

import { COLORS } from '../../constants';

export default () => (
  <Header>
    <Logo />
    <Nav />
  </Header>
);

const Header = styled.header`
  background: ${COLORS.white};
  color: ${COLORS.black.light};
  box-shadow: 0 1px 10px 0 rgba(42, 49, 141, 0.25);
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 auto;
  padding: 1rem 20px;
  position: sticky;
  text-align: center;
  top: 0;
  z-index: 10;
  @media (min-width: 414px) {
    align-items: center;
    justify-content: space-between;
  }
`;
