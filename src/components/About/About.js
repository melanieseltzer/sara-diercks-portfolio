// @flow
import React from 'react';
import { Query } from 'react-apollo';
import Markdown from 'react-markdown';
import { gql } from 'apollo-boost';

import Section from '../Section';

const GET_ABOUT_ME = gql`
  query {
    sections(orderBy: createdAt_DESC, where: { status: PUBLISHED }) {
      about
    }
  }
`;

export default () => (
  <Section title="About">
    <Query query={GET_ABOUT_ME}>
      {({ loading, error, data }) => {
        // Handle loading/error state
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error loading About Me :(</div>;

        const { about } = data.sections[0];

        // Handle no about
        if (data.sections.length === 0) {
          return <p>Nothing found.</p>;
        }

        return <Markdown source={about} />;
      }}
    </Query>
  </Section>
);
