// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SectionTitle from '../SectionTitle';

import { COLORS, maxContainerWidth } from '../../constants';

type Props = {
  title: string,
  children: Node
};

class Section extends Component<Props> {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

  render() {
    const { title, children } = this.props;
    return (
      <SectionStyled id={title.toLowerCase()}>
        <Container data-aos="fade-up">
          <SectionTitle title={title} />
          {children}
        </Container>
      </SectionStyled>
    );
  }
}

export default Section;

const SectionStyled = styled.section`
  background: ${COLORS.gray.light};
  color: ${COLORS.black.light};
  height: auto;
  padding: 50px 0 50px 0;
  text-align: left;
  @media (min-width: 1024px) {
    padding: 100px 0 100px 0;
  }
`;

const Container = styled.div`
  max-width: ${maxContainerWidth};
  margin: 0 20px;
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;
