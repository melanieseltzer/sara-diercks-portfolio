// @flow
import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../SectionTitle';

import { COLORS, maxContainerWidth } from '../../constants';

type Props = {
  title: string,
  children: Node
};

export default ({ title, children }: Props) => (
  <Section id={title.toLowerCase()}>
    <Container>
      <SectionTitle title={title} />
      {children}
    </Container>
  </Section>
);

const Section = styled.section`
  background: ${COLORS.gray.light};
  color: ${COLORS.black.light};
  height: auto;
  padding: 50px 0 50px 0;
  text-align: left;
  @media (min-width: 1024px) {
    padding: 100px 0 100px 0;
  }
`;

const Container = styled.div`
  max-width: ${maxContainerWidth};
  margin: 0 20px;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;
