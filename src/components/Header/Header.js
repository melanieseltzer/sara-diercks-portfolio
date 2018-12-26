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
  align-items: center;
  background: ${COLORS.white};
  color: ${COLORS.black.light};
  box-shadow: 0 1px 10px 0 rgba(51, 57, 132, 0.25);
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 20px;
  position: sticky;
  text-align: center;
  top: 0;
  z-index: 10;
`;
