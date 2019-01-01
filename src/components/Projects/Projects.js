// @flow
import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

import Project from '../Project';
import Section from '../Section';

const GET_PROJECTS = gql`
  query {
    projects(orderBy: createdAt_ASC, where: { status: PUBLISHED }) {
      id
      title
      shortDescription
      status
      thumbnail {
        fileName
        url
      }
      projectPdf {
        fileName
        url
        size
      }
      finalProject
      externalLinkUrl
      externalLinkName
    }
  }
`;

export default () => (
  <Section title="Projects">
    <ProjectsWrapper>
      <Query query={GET_PROJECTS}>
        {({ loading, error, data }) => {
          // Handle loading/error state
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error fetching projects :(</div>;

          // Handle no projects at all
          if (data.projects.length === 0)
            return <div>No projects yet. Check back soon!</div>;

          // If projects are returned then map over each one and render
          return data.projects.map(project => (
            <Project key={project.id} project={project} />
          ));
        }}
      </Query>
    </ProjectsWrapper>
  </Section>
);

const ProjectsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
