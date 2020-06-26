import React from 'react';

import Layout from '@components/Layout';
import Hero from '@components/Hero'
import HeroBody from '@components/HeroBody';
import HomeGrid from '@components/HomeGrid';
import Contact from '@components/Contact';
import SEO from '@components/Seo';

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO
        title="Ernesto Resende"
      />
      <Layout>
        <Hero>
          <HeroBody/>
        </Hero>
        <HomeGrid />
        <Contact />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage;
