// @flow
import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

import { COLORS } from '../../constants';

export default () => (
  <Section title="Contact">
    <p>
      I'm currently seeking employment opportunities. Please{' '}
      <Link href="mailto:s.diercks31@gmail.com">email me</Link>.
    </p>
  </Section>
);

const Link = styled.a`
  color: ${COLORS.primary.dark};
`;
