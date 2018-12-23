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
  border-bottom: 5px solid ${COLORS.secondary.light};
  display: inline-block;
  color: inherit;
  font-size: 1.8rem;
  font-weight: 400;
`;
