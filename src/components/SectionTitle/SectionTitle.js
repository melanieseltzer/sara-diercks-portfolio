import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const Title = ({ title }) => <H3>{title}</H3>;

export default Title;

const H3 = styled.h3`
  display: inline-block;
  color: inherit;
  font-family: 'Lora', serif;
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  margin-top: 0;
  padding-bottom: 10px;
  position: relative;
  &:after {
    border-bottom: 3px solid ${COLORS.secondary.dark};
    content: '';
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 0;
  }
`;
