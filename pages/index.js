// @flow
import React from 'react';

import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Intro from '../src/components/Intro';
import Page from '../src/components/Page';
import Projects from '../src/components/Projects';

const pageName = 'Home';

export default () => (
  <Page pageTitle={pageName} metaDescription="Test">
    <Intro />
    <Projects />
    <About />
    <Contact />
  </Page>
);
