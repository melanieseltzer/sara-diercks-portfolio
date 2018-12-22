// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

export default () => (
  <Section>
    <H2>
      Hi! I'm Sara. I'm a <Mark>GIS Technician</Mark> living in Los Angeles, CA.
    </H2>
    <Byline>
      I just completed my certificate in GIS and Geospatial Technology through
      UCLA Extension. This portfolio showcases my current skills and projects.
    </Byline>
  </Section>
);

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 50px 20px;
  max-width: 900px;
  text-align: left;
  @media (min-width: 960px) {
    margin: 0 auto;
    height: calc(100vh - 82px);
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 400;
  margin: 0;
`;

const Mark = styled.mark`
  background: ${COLORS.secondary.light};
  color: inherit;
`;

const Byline = styled.p`
  color: ${COLORS.gray};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
