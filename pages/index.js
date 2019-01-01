// @flow
import React, { Component } from 'react';

import Fonts from '../src/Fonts';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Intro from '../src/components/Intro';
import Page from '../src/components/Page';
import Projects from '../src/components/Projects';

const pageName = 'Home';

class Index extends Component<{}> {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Page pageTitle={pageName} metaDescription="Test">
        <Intro />
        <Projects />
        <About />
        <Contact />
      </Page>
    );
  }
}

export default Index;
