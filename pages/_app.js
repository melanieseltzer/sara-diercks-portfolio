// @flow
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import withApollo from '../backend/withApollo';
import { COLORS } from '../src/constants';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Header />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Footer />
      </Container>
    );
  }
}

export default withApollo(MyApp);

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body {
    background: url('/static/pattern-blue.svg');
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #__next {
    color: ${COLORS.white};
    margin: 0 auto;
    width: 100vw;
  }
`;
