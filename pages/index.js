// @flow
import React from 'react';
import Layout from '../src/components/Layout';

const pageName = 'Home';

export default () => (
  <Layout title={pageName} description="Test">
    <h1>{pageName}</h1>
    <p>Content goes here</p>
    {/* Pull in components which will be sections */}
    {/* SECTION --- work */}
    {/* SECTION --- about */}
    {/* SECTION --- content */}
  </Layout>
);
