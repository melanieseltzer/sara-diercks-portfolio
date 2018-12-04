// @flow
import React from 'react';
import styled from 'styled-components';

export default () => (
  <Section>
    <H1>
      Hi!{' '}
      <span role="img" aria-label="Wave">
        👋
      </span>{' '}
      My name is Sara. I'm a <Mark>GIS Specialist</Mark> living in Los Angeles,
      CA.
    </H1>
    <Byline>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
      cursus mauris, non iaculis urna. Donec condimentum lorem facilisis ligula
      tempus consequat.
    </Byline>
  </Section>
);

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 100px);
  margin: 0;
  @media (min-width: 961px) {
    height: auto;
    margin: 200px 0;
  }
`;

const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2.5rem;
  margin: 0;
`;

const Mark = styled.mark`
  background: #dcdcdc;
  color: hsl(0, 0%, 15%);
`;

const Byline = styled.h2`
  color: #555;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.8rem;
`;
