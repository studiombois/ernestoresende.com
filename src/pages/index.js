import React from 'react';

import Hero from '@components/Hero'
import HomeGrid from '@components/HomeGrid';
import Navigation from '@components/Navigation';
import SEO from '@components/Seo';

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO
        title="Ernesto Resende"
      />
      <Navigation />
      <Hero />
      <HomeGrid />
    </React.Fragment>
  )
}

export default IndexPage;
