// @flow
import React from 'react';
import Link from 'next/link';

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
