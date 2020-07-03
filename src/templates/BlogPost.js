import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import BlogHeader from '@components/BlogHeader';
import HeroNavigation from '@components/HeroNavigation';

import mixins from '@styles/mixins';
import media from '@styles/media';
import theme from '@styles/theme';



const Title = styled.h1 `
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.1rem;
  max-width: 650px;
  line-height: 40px;
  padding-top: 30px;
`
const Description = styled.h3 `
  max-width: 650px;
  line-height: 23px;
  color: var(--color-secondaryText);
  padding-top: 30px;
`

const ActiveLink = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  cursor: pointer;
  }
`
const InactiveLink = styled(props => <GatsbyLink {...props} />)`
  font-size: 16px;
  color: var(--color-secondaryText);
  transition: all ease-in-out 0.1s;
  :hover {
    color: var(--color-highlights);
  }
`

// Wraps both the article and the table of contents
const FullArticleWrapper = styled.div `
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  padding-top: 128px;
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  ${media.phablet`padding: 48px 25px 0 25px;`};
`

// Table of contents
const TableOfContentSidebar = styled.aside`
  display: block;
  width: 380px;
  padding-left: 106px;
  position: sticky;
  top: 148px;
  max-height: calc(100vh - 148px);
  overflow: auto;
  padding-bottom: 16px;
  ${media.desktop`display:none;`}
`;
// Wraps the Table of Content as a Navigation element for semantic HTML
const TableOfContentNavigation = styled.nav `
  h2 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 26px;
  }
  a {
    font-size: 16px;
    color: var(--color-secondaryText);
    text-decoration: none;
    transition: all ease-in-out 0.1s;
    :hover {
      color: var(--color-highlights);
    }
  }
`

// Article only div
const ArticleWrapper = styled.div `
  max-width: 680px;
  overflow-wrap: break-word;

  p {
    line-height: 30px;
    padding-bottom: 30px;
    ${media.thone`
      font-size: 18px;
      font-weight: 400;
      line-height: 1.4;
      letter-spacing: 0.015em;
    `}
  }
  ul {
    padding-left: 2.5rem;
    list-style-type: disc;
    margin-bottom: 30px;
  }
  ul li {
    margin-bottom: 1.6rem;
    line-height: 30px;
  }
  
  a {
    ${mixins.styledLink}
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    padding: 20px 0 20px 0;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    padding: 20px 0 20px 0;
  }
  h3 {
    font-size: 26px;
    font-weight: 700;
    padding: 20px 0 20px 0;
  }
  
  code {
    font-size: 16px;
  }
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    border-color: red;
  }
  blockquote {
    font-size: 20px;
    font-style: italic;
    overflow-wrap: break-word;
    padding-left: 2.4rem;
    padding-top: 10px;
    margin-bottom: 30px;
    border-left-style: solid;
    border-color: var(--color-highlights);
    border-width: 3px;
  }
  blockquote p {
    padding-bottom: 10px;
  }
  video {
    padding-bottom: 30px;
    width: 100%;
    max-width: 650px;
    min-width: 250px;
  }
`



class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark

    return (
      <div>
        <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          articles={true}
        />
        
        <BlogHeader>
          <HeroNavigation>
            <InactiveLink to="/">Home</InactiveLink> <span>&#60;</span> <InactiveLink to="/blog">Blog</InactiveLink> <span>&#60;</span> <ActiveLink>{post.frontmatter.title}</ActiveLink>
          </HeroNavigation>
          <Title>{post.frontmatter.title}</Title>
          <Description>{post.frontmatter.description}</Description>
        </BlogHeader>
        
        <FullArticleWrapper>
          <TableOfContentSidebar>
            <TableOfContentNavigation>
              <h2>TABLE OF CONTENTS</h2>
              <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
            </TableOfContentNavigation>
          </TableOfContentSidebar>

          <ArticleWrapper>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </ArticleWrapper>

        </FullArticleWrapper>
        
        </Layout>
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
        date(fromNow: true)
      }
      tableOfContents
    }
  }
`
