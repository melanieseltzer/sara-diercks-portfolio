// @flow
import React from 'react';
import styled from 'styled-components';

import Nav from '../Nav';

export default () => (
  <Header>
    {/* <Logo /> */}
    <Nav />
  </Header>
);

const Header = styled.header`
  background: red;
  height: 100px;
`;
