// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { COLORS, maxContainerWidth } from '../../constants';

type State = {
  height: number
};

class Intro extends Component<{}, State> {
  state = { height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  };

  render() {
    const { height } = this.state;
    const vh = height * 0.01;

    return (
      <Section height={vh}>
        <H2>
          Hi! I'm Sara. I'm a <Mark>GIS Technician</Mark> living in Los Angeles,
          CA.
        </H2>
        <Byline>
          I just completed my certificate in GIS and Geospatial Technology
          through UCLA Extension. This portfolio showcases my current skills and
          projects.
        </Byline>
      </Section>
    );
  }
}

export default Intro;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => `calc(${props.height}px * 100)`};
  margin: 0 20px;
  max-width: ${maxContainerWidth};
  text-align: left;
  @media (min-width: 1025px) {
    margin: 0 auto;
  }
`;

const H2 = styled.h2`
  color: inherit;
  font-size: 1.1rem;
  line-height: 2.1rem;
  font-weight: 400;
  margin: 0;
  @media (min-width: 375px) {
    font-size: 1.3rem;
    line-height: 2.3rem;
  }
  @media (min-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Mark = styled.mark`
  background: ${COLORS.secondary.dark};
  color: ${COLORS.black.dark};
  padding: 3px;
`;

const Byline = styled.p`
  color: inherit;
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 300;
  @media (min-width: 375px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;
