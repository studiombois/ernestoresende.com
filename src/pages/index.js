import React from 'react';
import GlobalStyles from '@styles/GlobalStyles';
import styled from 'styled-components';

import { graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import Hero from '@components/Hero'
//import HomeGrid from '@components/HomeGrid';
import Navigation from '@components/Navigation';
import SEO from '@components/Seo';


const BlogItem = styled(props => <GatsbyLink {...props} />)`
  display: block;
  color: white;
  text-decoration: none;
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


class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
      <SEO
        title="Ernesto Resende"
      />
      <GlobalStyles />
      <Navigation />
      <Hero />
          <div>
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
          </div>
      </div>
    )
  }
}

export default IndexPage;

export const homePageQuery = graphql`
  query homePageQuery {  
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date (fromNow: true)
          }
        }
      }
    }
  }
`
