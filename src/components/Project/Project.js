// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

export default () => (
  <>
    <Project>
      <Image src="https://source.unsplash.com/random" alt="Title" />
      <ProjectDetails>
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla, ex sed pharetra fringilla, dolor nisl ultrices felis,
          mollis tristique leo purus in mauris.
        </p>
        <p>
          <a href="/test/">View Project</a>
        </p>
      </ProjectDetails>
    </Project>
  </>
);

const Project = styled.div`
  background: ${COLORS.white};
  border-radius: 7px;
  box-shadow: 0 5px 30px 5px hsla(0, 0%, 0%, 0.1);
  height: auto;
  margin-bottom: 50px;
  width: 100%;
  transition: 0.2s ease;
  z-index: 1;
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

const Image = styled.img`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;
