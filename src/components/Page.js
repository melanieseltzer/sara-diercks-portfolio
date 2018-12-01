// @flow
import React, { type Node } from 'react';
import Head from 'next/head';
import { siteName } from '../../next.config.js';

type Props = {
  children: Node,
  title: string
};

export default ({ children, title = 'This is the default title' }: Props) => (
  <section>
    <Head>
      <title>
        {title} | {siteName}
      </title>
    </Head>
    {children}
  </section>
);
