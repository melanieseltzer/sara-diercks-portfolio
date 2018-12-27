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
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400"
        rel="stylesheet"
      />
    </Head>
    <main>{children}</main>
  </Fragment>
);
