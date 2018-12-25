// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

import { COLORS } from '../../constants';

type Props = {
  project: Object
};

export default ({ project }: Props) => (
  <>
    <Project>
      <Link
        href={
          // If there's a PDF then that will be the link, otherwise there'll be an external link
          project.projectPdf ? project.projectPdf.url : project.externalLinkUrl
        }
        target="_blank"
      >
        {/* Project doesn't have to have a thumbnail */}
        {project.thumbnail && (
          <Image src={project.thumbnail.url} alt={project.title} />
        )}
        <ProjectDetails>
          <H4>{project.title}</H4>
          <Paragraph>{project.shortDescription}</Paragraph>
          <span>
            {project.externalLinkName
              ? project.externalLinkName
              : 'View Project'}
            <FontAwesomeIconStyle
              icon={project.externalLinkName ? faExternalLinkAlt : faFilePdf}
            />
          </span>
        </ProjectDetails>
      </Link>
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
  transition: 0.4s ease;
  z-index: 1;
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.04);
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

const H4 = styled.h4`
  font-weight: 400;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  font-weight: 300;
  line-height: 1.5rem;
  margin: 10px 0 40px 0;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  span {
    color: ${COLORS.primary.light};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
  height: 1.05rem;
  margin-left: 5px;
`;
