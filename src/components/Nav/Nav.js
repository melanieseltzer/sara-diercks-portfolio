// @flow
import React from 'react';
import Link from 'next/link';

// NOTE: The Next.js Link API forces you to add an <a> inside <Link>
// which then gets its href passed down. This triggers `eslint-plugin-jsx-a11y`
// to throw an error due to the `noHref` rule. It's been disabled temporarily
// until a solution is found (issue: https://github.com/zeit/next.js/issues/5533)

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="#about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="#work">
          <a>Work</a>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);
