import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import { COLORS } from '../src/constants';

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
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #__next {
    color: ${COLORS.black};
    margin: 0 auto;
    max-width: 900px;
    width: calc(100vw - 40px);
    @media(min-width: 961px) {
      width: 100vw;
    }
  }
`;
