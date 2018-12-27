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
      {/* Project doesn't have to have a thumbnail */}
      {project.thumbnail && (
        <Image src={project.thumbnail.url} alt={project.title} />
      )}
      <ProjectDetails>
        <H4>
          {project.title}{' '}
          {project.finalProject && <Tag className="tag">Final Project</Tag>}
        </H4>
        <Paragraph>{project.shortDescription}</Paragraph>
        <Link
          href={
            // If there's a PDF then that will be the link, otherwise there'll be an external link
            project.projectPdf
              ? project.projectPdf.url
              : project.externalLinkUrl
          }
          target="_blank"
          className="project-link"
        >
          <span>
            {project.externalLinkName
              ? project.externalLinkName
              : 'View Project'}
            <FontAwesomeIconStyle
              icon={project.externalLinkName ? faExternalLinkAlt : faFilePdf}
            />
          </span>
        </Link>
      </ProjectDetails>
    </Project>
  </>
);

const Project = styled.div`
  background: ${COLORS.white};
  border-radius: 7px;
  box-shadow: 0 8px 40px 0 rgba(51, 57, 132, 0.25);
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
  margin-bottom: 0;
`;

const Tag = styled.span`
  background: ${COLORS.secondary.light};
  border-radius: 14px;
  font-size: 0.8rem;
  margin-left: 10px;
  padding: 7px;
`;

const Paragraph = styled.p`
  margin: 10px 0 40px 0;
`;

const Link = styled.a`
  font-size: 1.1rem;
  color: inherit;
  text-decoration: none;
  span:not(.tag) {
    color: ${COLORS.primary.dark};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;
