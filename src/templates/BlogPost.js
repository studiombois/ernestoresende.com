import React from 'react';
import { graphql } from 'gatsby';
// import styled from 'styled-components';

import SEO from '@components/Seo';
import GlobalStyles from '@styles/GlobalStyles';



class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark

    return (
      <div>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          articles={true}
        />

        <GlobalStyles/>
        <p>{post.frontmatter.date}</p>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.description}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    );
  };
};

export default BlogPostTemplate;


export const pageQuery = graphql `
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        date (formatString: "MMMM DD[,] YYYY")
      }
      tableOfContents
    }
  }
`
