import React from 'react';
import styled from 'styled-components';

import theme from '@styles/theme';
import media from '@styles/media';
const { fontSizes, space, colors } = theme;


const Item = styled.a `
  display: block;
  text-decoration: none;
`;

const DateTime = styled.p `
  padding-bottom: ${space.sm};
  font-size: ${fontSizes.xxs};
  color: ${colors.secondaryType};
`;

const PostTitle = styled.h1 `
  padding-bottom: ${space.xs};
  font-size: ${fontSizes.lg};
  line-height: 31px;
  font-weight: 600;
  color: ${colors.mainType};
`;

const PostDescription = styled.h2 `
  font-size: ${fontSizes.xs};
  color: ${colors.secondaryType};
`;


export default function BlogItem () {
  return(
    <Item href='#'>
      <DateTime>May 01, 2020</DateTime>
      <PostTitle>We need to talk about: Dribbble/Behance vs. the reality of work market</PostTitle>
      <PostDescription>It's time to talk about some concerns regarding the popularity growth of layouts that don't fit with the reality of the industry.</PostDescription>
    </Item>
  )
};
