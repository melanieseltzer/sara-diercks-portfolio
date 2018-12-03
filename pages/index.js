// @flow
import React from 'react';
import Layout from '../src/components/Layout';

import Intro from '../src/components/Intro';

const pageName = 'Home';

export default () => (
  <Layout metaTitle={pageName} metaDescription="Test">
    <Intro />
  </Layout>
);
