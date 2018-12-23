// @flow
import React from 'react';

import Intro from '../src/components/Intro';
import Page from '../src/components/Page';
import Projects from '../src/components/Projects';

const pageName = 'Home';

export default () => (
  <Page pageTitle={pageName} metaDescription="Test">
    <Intro />
    <Projects />
  </Page>
);
