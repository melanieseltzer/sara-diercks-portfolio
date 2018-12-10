// @flow
import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Nav from '../Nav';

export default () => (
  <Header>
    <Logo />
    <Nav />
  </Header>
);

const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 10px 0;
  text-align: center;
  @media (min-width: 375px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;
