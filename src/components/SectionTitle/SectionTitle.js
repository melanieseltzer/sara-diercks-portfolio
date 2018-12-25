// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

type Props = {
  title: String
};

const Title = ({ title }: Props) => <H3>{title}</H3>;

export default Title;

const H3 = styled.h3`
  display: inline-block;
  color: inherit;
  font-size: 1.6rem;
  font-weight: 400;
  padding-bottom: 15px;
  position: relative;
  &:after {
    border-bottom: 5px solid ${COLORS.secondary.dark};
    content: '';
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 0;
  }
`;
