import React from 'react';
import App, { Container } from 'next/app';

import Footer from '../src/components/Footer';
import Nav from '../src/components/Nav';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <header>
          <Nav />
        </header>

        <Component {...pageProps} />

        <Footer />
      </Container>
    );
  }
}
