import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import BlogNavigation from '@components/BlogNavigation'
import NavigationDrawer from '@components/NavigationDrawer'
import Footer from '@components/Footer'
import SEO from '@components/Seo'
import BlogHeader from '@components/BlogHeader'
import HeroNavigation from '@components/HeroNavigation'
import BlogImages from '@components/BlogImages'
import WarningSidenote from '@components/Sidenote/WarningSidenote'
import InformationSidenote from '@components/Sidenote/InformationSidenote'
import SucessSidenote from '@components/Sidenote/SucessSidenote'
import Quote from '@components/Mdx/Quote.js'
import TableOfContents from '@components/TableOfContents'

import mixins from '@styles/mixins'
import media from '@styles/media'
import theme from '@styles/theme'
const { fonts } = theme

const shortcodes = {
  WarningSidenote,
  InformationSidenote,
  SucessSidenote,
  TableOfContents,
  BlogImages,
  Quote,
}

// Header styles
const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -0.1rem;
  line-height: 1.3;
  padding-top: 30px;
  ${media.tablet`
    font-size: 36px;
    `}
`
const Description = styled.h3`
  font-size: 26px;
  line-height: 32px;
  font-weight: 600;
  color: var(--color-secondaryText);
  padding-top: 30px;
  ${media.tablet`
    font-size: 22px;
    `}
`
// Header Link Styles
const ActiveLink = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-highlights);
  cursor: pointer;
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
const FullArticleWrapper = styled.div`
  ${mixins.desktopAlignCenter}
  ${mixins.sidePadding}
  padding-top: 64px;
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  ${media.phablet`padding: 48px 15px 0 15px;`};
`

// Table of contents
const TableOfContentsWrapper = styled.div`
  display: block;
  width: 380px;
  margin-left: 108px;
  position: sticky;
  top: 148px;
  max-height: calc(100vh - 148px);
  overflow: auto;
  padding-bottom: 16px;
  ${media.desktop`display:none;`}
`

const TableOfContentNavigation = styled.nav`
  h2 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 26px;
  }
  a {
    color: var(--color-secondaryText);
    text-decoration: none;
    transition: all ease-in-out 0.1s;
    :hover {
      color: var(--color-highlights);
    }
  }
  li {
    font-size: 16px;
    padding-bottom: 0.6em;
    list-style: none;
  }
`
// Wraps the Table of Content as a Navigation element for semantic HTML

// Article only div
const ArticleWrapper = styled.div`
  width: 680px;
  overflow-wrap: break-word;

  p {
    line-height: 1.7;
    padding-bottom: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }
  em {
    font-family: ${fonts.Sriracha};
    font-style: normal;
    color: var(--color-highlights);
  }
  ul {
    padding-left: 2.5rem;
    list-style-type: disc;
    margin-bottom: 30px;
  }
  ul li {
    margin-bottom: 1.6rem;
    line-height: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }

  a {
    ${mixins.styledLink}
    ${media.thone`
      font-size: 16px;
    `}
  }
  h1 {
    font-size: 36px;
    color: var(--color-titleHighlights);
    font-weight: 700;
    line-height: 1.2;
    padding: 20px 0 20px 0;
  }
  h2 {
    font-size: 28px;
    color: var(--color-titleHighlights);
    font-weight: 700;
    padding: 20px 0 20px 0;
  }
  h3 {
    font-size: 24px;
    color: var(--color-titleHighlights);
    font-weight: 700;
    padding: 20px 0 20px 0;
  }
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
    border-color: var(--color-cards);
  }
`

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <BlogNavigation/>
        <SEO
          title={`${mdx.frontmatter.title} - Ernesto Resende`}
          description={mdx.frontmatter.description}
          image={mdx.frontmatter.featured}
          pathname={`/blog${mdx.fields.slug}`}
        />

        <BlogHeader>
          <HeroNavigation>
            <InactiveLink to='/'>Home</InactiveLink> <span>&#60;</span>{' '}
            <InactiveLink to='/blog'>Blog</InactiveLink> <span>&#60;</span>{' '}
            <ActiveLink>{mdx.frontmatter.title}</ActiveLink>
          </HeroNavigation>
          <Title>{mdx.frontmatter.title}</Title>
          <Description>{mdx.frontmatter.description}</Description>
        </BlogHeader>

        <FullArticleWrapper>
          <TableOfContentsWrapper>
            <TableOfContentNavigation>
              <h2>TABLE OF CONTENTS</h2>
              <TableOfContents headings={mdx.headings} url={mdx.fields.slug} />
            </TableOfContentNavigation>
          </TableOfContentsWrapper>

          <ArticleWrapper>
            <MDXProvider components={shortcodes}>
              <MDXRenderer headings={mdx.headings} url={mdx.fields.slug}>
                {mdx.body}
              </MDXRenderer>
            </MDXProvider>
          </ArticleWrapper>
        </FullArticleWrapper>
      <Footer/>
      <NavigationDrawer/>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
        featured
      }
      headings {
        depth
        value
      }
    }
  }
`
