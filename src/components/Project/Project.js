// @flow
import React from 'react';
import styled from 'styled-components';

// import { COLORS } from '../../constants';

export default () => (
  <>
    <Project>
      <h4>Title</h4>
      <p>Body</p>
      <p>
        <a href="/test/">View Project</a>
      </p>
    </Project>
  </>
);

const Project = styled.div`
  border: 1px solid red;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  @media (min-width: 768px) {
    margin-right: 5%;
    width: 45%;
  }
`;
