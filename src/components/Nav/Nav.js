// @flow
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HamburgerSpin } from 'react-animated-burgers';
import Link from 'next/link';
import styled from 'styled-components';

// Pull in nav items for render
import { COLORS, pages, StyledLinkHover } from '../../constants';

type State = {
  active: boolean
};

class Navigation extends Component<{}, State> {
  // Initial state of hamburger is false (closed)
  state = {
    active: false
  };

  componentDidMount() {
    // Do a check on mount for screen resize, if going from mobile view (with hamburger)
    // to tablet/desktop view (no hamburger), then reset active state with handleResize
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Remove the listener on unmount
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth >= 500) {
      this.setState({ active: false });
    }
  };

  handleClick = () => {
    const { active } = this.state;

    // Only run set state if browser is small enough to have the hamburger
    if (window.innerWidth < 500) {
      this.setState({ active: !active });
    }
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <Hamburger
          isActive={active}
          toggleButton={this.handleClick}
          buttonColor={COLORS.secondary.dark}
          barColor="white"
          buttonWidth={25}
        />
        <Nav active={active}>
          <ul>
            {pages.map(page => (
              <li key={page}>
                <Link
                  href={
                    page === 'Resume'
                      ? `/static/Diercks_Sara_Resume102818.pdf`
                      : `#${page.toLowerCase()}`
                  }
                  passHref
                >
                  {/* NOTE: The Next.js Link API forces you to add an <a> inside <Link>
                    which gets its href passed down. This triggers `eslint-plugin-jsx-a11y`
                    to throw an error due to the `noHref` rule. The rule has been disabled
                    temporarily until a solution is found
                    ref: https://github.com/zeit/next.js/issues/5533 */}

                  {page === 'Resume' ? (
                    // Resume doesn't have a hash for the anchor, so render it as a
                    // regular link instead
                    <StyledLink target="_blank">{page}</StyledLink>
                  ) : (
                    // AnchorLink is rendered only for links that have a hash
                    <StyledAnchorLink
                      // Mobile: since this is a one pager and the header is always showing
                      // need to set the nav to close when a link is clicked
                      onClick={this.handleClick}
                    >
                      {page}
                    </StyledAnchorLink>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
      </>
    );
  }
}

export default Navigation;

const Hamburger = styled(HamburgerSpin)`
  height: 40px;
  div {
    height: 20px;
  }
  div span,
  div span::after,
  div span::before {
    height: 3px;
  }
  @media (min-width: 500px) {
    display: none !important;
  }
`;

const Nav = styled.nav`
  margin-top: 20px;
  width: 100%;
  @media (max-width: 499px) {
    display: ${props => (props.active ? 'flex' : 'none')};
    height: calc(100vh - 85px);
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 500px) {
    display: block;
    margin: 0;
    width: auto;
  }
  ul {
    font-size: 2rem;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    @media (min-width: 500px) {
      display: flex;
      font-size: 1rem;
    }
  }
  ul li {
    font-family: 'Lora', serif;
    font-style: italic;
    font-weight: 400;
    list-style-type: none;
    padding-bottom: 3rem;
    @media (min-width: 500px) {
      font-size: 1.1rem;
      margin-left: 1.5rem;
      padding: 0;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const StyledAnchorLink = styled(AnchorLink)`
  ${StyledLinkHover}
`;

const StyledLink = styled.a`
  ${StyledLinkHover}
`;
