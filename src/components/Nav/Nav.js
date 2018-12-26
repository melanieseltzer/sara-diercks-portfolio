// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Slider } from 'react-burgers';

// Pull in nav items for render
import { COLORS, pages } from '../../constants';

// Render a single nav item in the UI
// NOTE: The Next.js Link API forces you to add an <a> inside <Link>
// which then gets its href passed down. This triggers `eslint-plugin-jsx-a11y`
// to throw an error due to the `noHref` rule. The rule has been disabled temporarily
// until a solution is found (issue: https://github.com/zeit/next.js/issues/5533)
const navItem = name => (
  <li key={name}>
    <Link
      href={
        name === 'Resume'
          ? `/static/Diercks_Sara_Resume102818.pdf`
          : `#${name.toLowerCase()}`
      }
      passHref
    >
      {/* Add a target blank only if the link is the resume */}
      <StyledLink target={name === 'Resume' ? '_blank' : undefined}>
        {name}
      </StyledLink>
    </Link>
  </li>
);

export default () => (
  <>
    <Hamburger />
    <Nav>
      <ul>{pages.map(page => navItem(page))}</ul>
    </Nav>
  </>
);

const Hamburger = styled(Slider)`
  padding: 0;
  @media (min-width: 500px) {
    display: none !important;
  }
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: 500px) {
    display: block;
  }
  ul {
    display: flex;
    font-size: 1rem;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style-type: none;
    @media (min-width: 414px) {
      margin-left: 1.5rem;
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
