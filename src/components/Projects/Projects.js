// @flow
import React from 'react';
import styled from 'styled-components';

import Project from '../Project';
import Section from '../Section';

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
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
