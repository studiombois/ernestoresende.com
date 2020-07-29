import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import Hero from '@components/Hero'
import HeroBody from '@components/HeroBody';
import HomeGrid from '@components/HomeGrid';
import BlogItem from '@components/BlogItem';
import SEO from '@components/Seo';

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO
        title="Ernesto Resende"
      />
      <Layout>
        <Hero>
          <HeroBody/>
        </Hero>
        <HomeGrid>
        {data.allMdx.nodes.map(({ id, excerpt, fields, timeToRead, frontmatter }) => (
          <BlogItem
            key={id}
            slug={fields.slug}
            timeToRead={timeToRead}
            title={frontmatter.title}
            description={frontmatter.description}
            excerpt={excerpt}
          />
        ))}
        </HomeGrid>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt(pruneLength: 230)
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          date
          description
        }
      }
    }
  }
`
