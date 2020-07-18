import React from 'react';
import styled from 'styled-components';

import BlogItem from '@components/BlogItem';

import { useStaticQuery, graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import mixins from '@styles/mixins';
import media from '@styles/media';

const MaxWidthWrapper = styled.main `
  width: 100%;
  z-index: 20;
`
// Component that makes up the entire grid system from the homepage
const Grid = styled.div `
    max-width: 1100px;
    ${mixins.desktopAlignCenter}
    ${mixins.sidePadding}
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 1fr;
    padding-top: 64px;
    gap: 64px 96px;
    ${media.tablet`
      display: flex;
      flex-direction: column;
      padding-top: 64px;
    `};
`;
const Recent = styled.h2 `
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 30px;
  color: var(--color-highlights);
`;
const Content = styled.h2 `
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 30px;
  color: var(--color-highlights);
  text-align: right;
  ${media.tablet`
      padding-top: 70px;
      text-align: left;
    `}
`;
const ContentDescription = styled.p `
  text-align: right;
  line-height: 23px;
  ${media.tablet`
      text-align: left;
    `}
`;
const Archive = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
`;
const HeroMaskWrapper = styled.div `
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  bottom: 43px;
`;

const blogListQuery = graphql `
  query {  
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(fromNow: true)
          }
        }
      }
    }
  }
`

// First components nested inside Grid should be the Wrapper
// holding the Blog Items.
// Second component should be the popular posts curation.

const HomeGrid = () => {
  const allBlogList = useStaticQuery(blogListQuery)
  const list = allBlogList.allMarkdownRemark.edges

  return (
    <MaxWidthWrapper>
      <Grid>
        <div>
          <Recent>MOST RECENT</Recent>
          {list.map(({  node }, i) => (
            <BlogItem
              key={i}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
            />
          ))}
          <Archive to="/blog">See all blog posts</Archive>
        </div>
        <div>
          <Content>TAILOR-MADE CONTENT FOR FRONT-END DEVELOPERS</Content>
          <ContentDescription>I like to write in detail about the stuff I work on. Most of the times, 280 characters on Twitter wont cut it, and information gets lost with ease. This is where I’ll write about front-end development, design and general tech related stuff. I hope you’ll enjoy 😄</ContentDescription> 
        </div>
      </Grid>
    </MaxWidthWrapper>
  )
}

export default HomeGrid;
