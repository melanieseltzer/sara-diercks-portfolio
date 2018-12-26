// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

export default () => (
  <Logo>
    <a href="/">
      Sara Diercks
      <Border />
    </a>
  </Logo>
);

const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  margin: 0;
  position: relative;
  a {
    color: ${COLORS.black.dark};
    text-decoration: none;
  }
  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.05);
    }
    &:hover span {
      width: 100%;
    }
  }
`;

const Border = styled.span`
  background: ${COLORS.primary.light};
  background: linear-gradient(
    to right,
    ${COLORS.primary.light},
    ${COLORS.secondary.dark}
  );
  bottom: 0;
  display: block;
  height: 7px;
  max-width: 170px;
  margin: 0 auto;
  position: absolute;
  width: 100%;
  z-index: -10;
  @media (max-width: 1024px) {
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 1025px) {
    margin: 0;
    max-width: none;
    transition: all 0.2s ease-in-out;
    transform: rotate(-1deg);
    width: 30%;
  }
`;
