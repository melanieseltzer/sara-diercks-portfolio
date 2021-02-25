import React from 'react';
import { ApolloProvider } from 'react-apollo';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';

// To not have oversized icons on page refresh, have to load the css
// ref: https://github.com/FortAwesome/react-fontawesome/issues/134
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import LoadFonts from '../src/fonts';
import withApollo from '../backend/withApollo';
import { COLORS, sharedLinkStyles } from '../src/constants';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    LoadFonts();
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
  section a:not(.project-link),
  .footer-link {
    color: inherit;
    text-decoration: none;
    ${sharedLinkStyles}
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
  }
`;
