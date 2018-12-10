// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

export default () => (
  <Section>
    <H2>
      Hi! My name is Sara. I'm a <Mark>GIS Specialist</Mark> living in Los
      Angeles, CA.
    </H2>
    <Byline>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
      cursus mauris, non iaculis urna. Donec condimentum lorem facilisis ligula
      tempus consequat.
    </Byline>
  </Section>
);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 30px 0;
  text-align: left;
  @media (min-width: 960px) {
    margin: 0;
    height: calc(100vh - 82px);
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 400;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2.7rem;
    line-height: 3.9rem;
  }
`;

const Mark = styled.mark`
  background: ${COLORS.orange.light};
  color: inherit;
`;

const Byline = styled.p`
  color: ${COLORS.gray};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
