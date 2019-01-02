// @flow
import React from 'react';

import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Intro from '../src/components/Intro';
import Page from '../src/components/Page';
import Projects from '../src/components/Projects';

const Index = () => (
  <Page
    pageTitle="Home"
    metaDescription="Showcasing projects from UCLA Extension's GIS and Geospatial Technology certificate program."
  >
    <Intro />
    <Projects />
    <About />
    <Contact />
  </Page>
);

export default Index;
