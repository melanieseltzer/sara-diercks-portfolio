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
  color: ${COLORS.black};
  box-shadow: 0 1px 10px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  padding: 10px 20px;
  position: sticky;
  text-align: center;
  top: 0;
  @media (min-width: 414px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
`;
