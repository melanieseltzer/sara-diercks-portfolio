// @flow
import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#work">Work</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  </nav>
);
