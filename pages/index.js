// @flow
import React from 'react';
import Page from '../src/components/Page';

import Intro from '../src/components/Intro';

const pageName = 'Home';

export default () => (
  <Page pageTitle={pageName} metaDescription="Test">
    <Intro />
  </Page>
);
