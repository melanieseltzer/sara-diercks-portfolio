import React from 'react';

import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Intro from '../src/components/Intro';
import Page from '../src/layout/Page';
import Projects from '../src/components/Projects';

const Index = () => (
  <Page
    pageTitle="GIS Projects"
    metaDescription="Portfolio of Sara Diercks, showcasing projects from UCLA Extension's GIS and Geospatial Technology certificate program."
  >
    <Intro />
    <Projects />
    <About />
    <Contact />
  </Page>
);

export default Index;
