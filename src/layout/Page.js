import React, { Fragment } from 'react';
import Head from 'next/head';

const Page = ({
  children,
  pageTitle = 'Default title',
  metaDescription = 'Default description'
}) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{pageTitle} | Portfolio of Sara Diercks</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href="https://saradiercks.com" />
      <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
    </Head>
    <main>{children}</main>
  </Fragment>
);

export default Page;
