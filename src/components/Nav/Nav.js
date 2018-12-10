// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// NOTE: The Next.js Link API forces you to add an <a> inside <Link>
// which then gets its href passed down. This triggers `eslint-plugin-jsx-a11y`
// to throw an error due to the `noHref` rule. It's been disabled temporarily
// until a solution is found (issue: https://github.com/zeit/next.js/issues/5533)

export default () => (
  <Nav>
    <ul>
      <li>
        <Link href="#about" passHref>
          <StyledLink title="About">About</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="#work" passHref>
          <StyledLink title="Work">Work</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" passHref>
          <StyledLink title="Contact">Contact</StyledLink>
        </Link>
      </li>
    </ul>
  </Nav>
);

const Nav = styled.nav`
  ul {
    display: flex;
    font-size: 1.2rem;
    justify-content: space-evenly;
    padding: 0;
  }
  ul li {
    list-style-type: none;
    @media (min-width: 414px) {
      margin-left: 1.2rem;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    border-bottom: 3px solid tomato;
  }
`;
