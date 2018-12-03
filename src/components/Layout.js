// @flow
import React, { type Node, Fragment } from 'react';
import Head from 'next/head';
import { siteName } from '../../next.config.js';

type Props = {
  children: Node,
  metaTitle: string,
  metaDescription: string
};

export default ({
  children,
  metaTitle = 'Default title',
  metaDescription = 'Default description'
}: Props) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        {metaTitle} | {siteName}
      </title>
      <meta name="description" content={metaDescription} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        rel="stylesheet"
      />
    </Head>
    <main>{children}</main>
  </Fragment>
);
