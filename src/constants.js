// A file to keep track of constants across the project
import { css } from 'styled-components';

// Colors
export const COLORS = {
  primary: {
    light: '#fbaab1',
    dark: '#ff5f6d'
  },
  secondary: {
    light: '#ffeace',
    dark: '#ffc371'
  },
  white: '#FFF',
  black: {
    light: '#4c4c4c',
    dark: '#262626'
  },
  gray: {
    light: '#F3F7F9',
    dark: '#dbe3e8'
  }
};

// Nav Items
export const pages = ['Projects', 'Resume', 'About', 'Contact'];

// Breakpoints and sizes
export const maxContainerWidth = '900px';

// Shared styles
export const sharedLinkStyles = css`
  font-weight: 400;
  background-image: linear-gradient(
    180deg,
    transparent 70%,
    ${COLORS.primary.light} 0
  );
`;
