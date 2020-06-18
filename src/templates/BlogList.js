import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';
import GlobalStyles from '@styles/GlobalStyles';

import SEO from '@components/Seo';


const Main = styled.div`
  width: 100%;
  max-width: 690px;
  padding: 200px 50px 0 50px;
  margin: 0 auto;
`
const BlogItem = styled(props => <GatsbyLink {...props} />)`
  display: block;
`
const DateTime = styled.p`
  margin-bottom: 0.4rem;
  font-size: 14px;
  letter-spacing: 0.1rem;
`
const ArticleTitle = styled.h1`
  margin: 1.6rem 0 0.8rem 0;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
`
const ArticleDescription = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 18px;
  line-height: 1.3em;
`

//Pagination Styling, could be moved to components later
const Pagination = styled.nav`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  margin-top: 4.8rem;
  padding-bottom: 2.8rem;
  padding-top: 1.6rem;
`
const PaginationLink = styled(props => <GatsbyLink {...props} />)`
  color: blue;
`;



class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
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
      <GlobalStyles />
          <Main>

            {posts.map(({ node }) => {
              const slug = node.fields.slug;
              const title = node.frontmatter.title || node.fields.slug;
              const description = node.frontmatter.description;
              const date = node.frontmatter.date;

              return (
                <BlogItem to={`/blog/${slug}`}>
                  <DateTime>{date}</DateTime>
                  <ArticleTitle to={slug}>{title}</ArticleTitle>
                  <ArticleDescription>{description}</ArticleDescription>
                </BlogItem>
              )
            })}

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
          </Main>
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
          excerpt
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
