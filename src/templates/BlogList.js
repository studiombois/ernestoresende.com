import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import SEO from '@components/Seo';
import Navigation from '@components/Navigation';
import SmallHero from '@components/SmallHero';
import BlogItem from '@components/BlogItem';

import mixins from '@styles/mixins';
import media from '@styles/media';
import theme from '@styles/theme';
const { fontSizes } = theme;

const Grid = styled.div `
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

const Title = styled.h2 `
  font-size: ${fontSizes.xxlg};
  font-weight: 700;
  padding-top: 20px;
  div {
    display: inline-block;
    
    h2 {
      color: var(--color-highlights);
    }
  }
`;

//Pagination Styling, could be moved to components later
const Pagination = styled.nav`
  ${mixins.desktopAlignCenter}
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  margin-top: 4.8rem;
  padding-bottom: 2.8rem;
  padding-top: 1.6rem;
  ${mixins.sidePadding}
`
const PaginationLink = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-text);
  transition: all ease-in-out 0.1s;
  :hover {
    color: var(--color-highlights);
  }
`;



class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const list = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    return (
      <div>
        <SEO
          title="Blog"
          description="A collection of my blog posts."
        />
        <Navigation />
        <SmallHero>
          <Title>Blog</Title>
        </SmallHero>
          
          <Grid>
            <div>
              {list.map(({ node }, i) => (
                <BlogItem
                  key={i}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                />
              ))}
            </div>
          </Grid>


          <Pagination>
              
              {!isFirst && (
                <PaginationLink 
                to={prevPage} 
                rel="prev">
                  ← Previous
                </PaginationLink>
              )}
              
              <span>{currentPage} of {numPages}</span>
              
              {!isLast && (
                <PaginationLink 
                to={nextPage} 
                rel="next">
                  Next →
                </PaginationLink>
              )}

            </Pagination>
      </div>
    )
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {  
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
