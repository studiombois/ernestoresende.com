import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import SEO from '@components/Seo';
import Layout from '@components/Layout';
import SmallHero from '@components/SmallHero';
import BlogItem from '@components/BlogItem';

import mixins from '@styles/mixins';
import media from '@styles/media';

const Main = styled.div `
  padding-top: 60px;
  max-width: 780px;
  margin: 0 auto;
  ${mixins.sidePadding}
`;


const ActiveLink = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-text);
  font-size: 16px;
  font-weight: 700;
  transition: all ease-in-out 0.1s;
  :hover {
    color: var(--color-highlights);
  }
`
const InactiveLink = styled(props => <GatsbyLink {...props} />)`
  color: var(--color-secondaryText);
  font-size: 16px;
  transition: all ease-in-out 0.1s;
  :hover {
    color: var(--color-highlights);
  }
`
const Title = styled.h2 `
  font-size: 48px;
  font-weight: 700;
  padding-top: 40px;
`;

//Pagination Styling, could be moved to components later
const Pagination = styled.nav`
  ${mixins.desktopAlignCenter}
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  justify-content: space-between;
  padding-bottom: 2.8rem;
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
        <Layout>
        <SmallHero/>
          
          <Main>
            <div>
              {list.map(({ node }, i) => (
              <BlogItem
                key={i}
                slug={node.fields.slug}
                timeToRead={node.timeToRead}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                description={node.frontmatter.description}
              />
              ))}
              </div>
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

        </Layout>
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
          excerpt(pruneLength: 230)
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(fromNow: true)
          }
          timeToRead
        }
      }
    }
  }
`
