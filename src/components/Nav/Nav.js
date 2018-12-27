// @flow
import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Pull in nav items for render
import { COLORS, pages } from '../../constants';

type State = {
  active: boolean
};

class Navigation extends Component<{}, State> {
  state = {
    active: false
  };

  handleClick() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    const { active } = this.state;
    return (
      <>
        <Hamburger
          type="button"
          onClick={() => {
            this.handleClick();
          }}
        >
          <Icon
            color={COLORS.black.dark}
            size="2x"
            // Switch between icons depending on click state
            icon={active ? faTimes : faBars}
          />
        </Hamburger>
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
                  <StyledLink
                    // Since this is a one pager and the nav is always showing
                    // need to set the nav to close when a link is clicked
                    onClick={() => {
                      this.handleClick();
                    }}
                    target={page === 'Resume' ? '_blank' : undefined}
                  >
                    {page}
                  </StyledLink>
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

const Hamburger = styled.button`
  border: none;
  padding: 0;
  svg {
    /* Set min-width so icons remain same size when switching between */
    min-width: 30px;
  }
  @media (min-width: 500px) {
    display: none !important;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  padding: 0;
  &:focus {
    outline: inherit;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  margin-top: 20px;
  width: 100%;
  @media (max-width: 499px) {
    display: ${props => (props.active ? 'flex' : 'none')};
    height: calc(100vh - 78px);
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
    list-style-type: none;
    padding-bottom: 3rem;
    @media (min-width: 500px) {
      margin-left: 1.5rem;
      padding: 0;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    border-bottom: 3px solid ${COLORS.primary.light};
  }
`;
