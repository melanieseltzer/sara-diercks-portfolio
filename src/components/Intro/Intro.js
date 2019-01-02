// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS, maxContainerWidth } from '../../constants';

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
  padding: 100px 0;
  margin: 65px 20px 0 20px;
  max-width: ${maxContainerWidth};
  text-align: left;
  @media (min-width: 768px) {
    margin: 0 20px;
    padding: 200px 0;
  }
  @media (min-width: 1025px) {
    margin: 0 auto;
    padding: 0;
    height: 100vh;
  }
`;

const H2 = styled.h2`
  color: inherit;
  font-size: 1.1rem;
  line-height: 2.1rem;
  font-weight: 400;
  margin: 0;
  @media (min-width: 375px) {
    font-size: 1.3rem;
    line-height: 2.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Mark = styled.mark`
  background: ${COLORS.secondary.dark};
  color: ${COLORS.black.dark};
  padding: 3px;
`;

const Byline = styled.p`
  color: inherit;
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 300;
  @media (min-width: 375px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;
