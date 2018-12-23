// @flow
import React from 'react';
import styled from 'styled-components';

import Project from '../Project';
import Section from '../Section';

import { COLORS } from '../../constants';

export default () => (
  <Section title="Projects">
    <ProjectsWrapper>
      {/* Eventually these will be pulled in from GraphCMS */}
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ProjectsWrapper>
  </Section>
);

const ProjectsWrapper = styled.div`
  background: ${COLORS.white};
  display: flex;
  justify-content: start;
  flex-flow: wrap;
`;
