import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link as GatsbyLink } from 'gatsby';

import mixins from '@styles/mixins';
import theme from '@styles/theme';
import media from '@styles/media';
const { fontSizes, space, colors } = theme;

export const PostContainer = styled(props => <GatsbyLink {...props} />) `
  display: block;
  text-decoration: none;
  padding-bottom: ${space.xlg};
`;
const DateTime = styled.p `
  padding-bottom: ${space.sm};
  font-size: ${fontSizes.xxs};
  color: ${colors.secondaryType};
`;
const Title = styled.h1 `
  padding-bottom: ${space.xs};
  font-size: ${fontSizes.xxmd};
  line-height: 31px;
  font-weight: 600;
  color: ${colors.mainType};
  transition: all ease-in-out 0.1s;
  :hover {
    color: ${colors.highlightPink};
  }
`;
const Description = styled.h2 `
  font-size: ${fontSizes.xs};
  color: ${colors.secondaryType};
  line-height: 2.5rem;
`;

const BlogItem = ({
  slug,
  date,
  title,
  description
}) => {
  return (
    <PostContainer
      to={`/blog/${slug}`}
      title={title}
    >
      <DateTime>{date}</DateTime>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </PostContainer>
  );
};

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default BlogItem;
