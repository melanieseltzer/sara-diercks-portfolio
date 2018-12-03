// @flow
import React, { type Node, Fragment } from 'react';
import Head from 'next/head';
// import styled from 'styled-components';
import { siteName } from '../../next.config.js';

type Props = {
  children: Node,
  title: string,
  description: string
};

export default ({
  children,
  title = 'Default title',
  description = 'Default description'
}: Props) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        {title} | {siteName}
      </title>
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        rel="stylesheet"
      />
    </Head>
    <main>{children}</main>
  </Fragment>
);
