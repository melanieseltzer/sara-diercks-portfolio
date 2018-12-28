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
  box-shadow: 0 1px 10px 0 rgba(64, 67, 109, 0.25);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 70px;
  padding: 1rem 20px;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 10;
`;
