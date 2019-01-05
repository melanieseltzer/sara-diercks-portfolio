// @flow
import React from 'react';
import GraphImg from 'graphcms-image';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

import { COLORS, sharedLinkStyles } from '../../constants';
import { bytesToSize } from '../../utils';

type Props = {
  project: Object
};

const Project = ({ project }: Props) => (
  <>
    <ProjectStyled>
      {/* Project doesn't have to have a thumbnail */}
      {project.thumbnail && (
        <Image
          image={project.thumbnail}
          alt={project.title}
          maxWidth={730}
          withWebp
        />
      )}
      <ProjectDetails>
        <H4>
          {project.title}{' '}
          {project.finalProject && <Tag className="tag">Final Project</Tag>}
        </H4>
        <Paragraph source={project.shortDescription} />
        <Link
          href={
            // If there's a PDF then that will be the link, otherwise there'll be an external link
            project.projectPdf
              ? project.projectPdf.url
              : project.externalLinkUrl
          }
          target="_blank"
          className="project-link"
          rel="noopener noreferrer"
        >
          <span>
            {project.externalLinkName
              ? project.externalLinkName
              : `View Project ${bytesToSize(project.projectPdf.size)}`}
          </span>
          <FontAwesomeIconStyle
            icon={project.externalLinkName ? faExternalLinkAlt : faFilePdf}
          />
        </Link>
      </ProjectDetails>
    </ProjectStyled>
  </>
);

export default Project;

const ProjectStyled = styled.div`
  background: ${COLORS.white};
  border-radius: 7px;
  box-shadow: 0 10px 40px 0 rgba(64, 67, 109, 0.25);
  height: auto;
  margin-bottom: 50px;
  width: 100%;
  transition: 0.3s ease;
  z-index: 1;
  @media (min-width: 768px) {
    width: 47%;
  }
  @media (min-width: 1025px) {
    &:hover {
      position: relative;
      box-shadow: 0 10px 40px 0 rgba(64, 67, 109, 0.35);
      transform: scale(1.02);
    }
  }
  @media (min-width: 1440px) {
    width: 30%;
  }
`;

const Image = styled(GraphImg)`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  height: 250px;
  object-fit: cover;
  width: 100%;
`;

const ProjectDetails = styled.div`
  padding: 20px;
`;

const H4 = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.8rem;
  margin: 0;
`;

const Tag = styled.span`
  background: ${COLORS.secondary.light};
  border-radius: 14px;
  font-size: 0.8rem;
  padding: 7px;
  white-space: nowrap;
`;

const Paragraph = styled(Markdown)`
  margin: 10px 0 40px 0;
`;

const Link = styled.a`
  color: inherit;
  font-size: 1.1rem;
  text-decoration: none;
  span:not(.tag) {
    ${sharedLinkStyles}
  }
`;

const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
  color: ${COLORS.primary.dark};
  margin-left: 10px;
`;
