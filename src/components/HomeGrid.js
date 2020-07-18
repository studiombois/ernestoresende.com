import React from 'react';
import styled from 'styled-components';

import BlogItem from '@components/BlogItem';
import SectionCard from '@components/SectionCard'

import { useStaticQuery, graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import mixins from '@styles/mixins';
import media from '@styles/media';

// Component that makes up the entire grid system from the homepage
const Main = styled.div `
  max-width: 780px;
  margin: 0 auto;
  ${mixins.sidePadding}
`;
const Recent = styled.h2 `
  font-size: 18px;
  font-weight: 600;
  padding: 50px 0 30px;
  color: var(--color-highlights);
`;
const Archive = styled(props => <GatsbyLink {...props} />)`
  ${mixins.styledLink}
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
      <Main>
      <SectionCard
      title="Writing."
      description="I love to write in detail about the stuff I work on. This is where I'll write about front-end development, design, and general tech related stuff." />
        <div>
          <Recent>RECENTLY PUBLISHED</Recent>
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
      </Main>
  )
}

export default HomeGrid;
