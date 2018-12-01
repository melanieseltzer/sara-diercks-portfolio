// @flow
import React from 'react';
import Page from '../src/components/Page';

const pageName = 'Home';

export default () => (
  <Page title={pageName}>
    <h1>{pageName}</h1>

    <p>Content goes here</p>
  </Page>
);
