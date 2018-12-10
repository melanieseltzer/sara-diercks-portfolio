// @flow
import React from 'react';
import styled from 'styled-components';

export default () => (
  <Section>
    <H3>
      Hi! My name is Sara. I'm a <Mark>GIS Specialist</Mark> living in Los
      Angeles, CA.
    </H3>
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
  text-align: center;
  @media (min-width: 375px) {
    text-align: left;
  }
  @media (min-width: 960px) {
    margin: 0;
    height: calc(100vh - 82px);
  }
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 400;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`;

const Mark = styled.mark`
  background: #ffc371;
  color: hsl(0, 0%, 15%);
`;

const Byline = styled.p`
  color: #555;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
