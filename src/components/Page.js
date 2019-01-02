// @flow
import React, { type Node, Fragment } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
  pageTitle: string,
  metaDescription: string
};

export default ({
  children,
  pageTitle = 'Default title',
  metaDescription = 'Default description'
}: Props) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{pageTitle} | Portfolio of Sara Diercks</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    </Head>
    <main>{children}</main>
  </Fragment>
);
