import React from 'react';
import GlobalStyles from '@styles/GlobalStyles';

import Hero from '@components/Hero'
import HomeGrid from '@components/HomeGrid';
import Navigation from '@components/Navigation';
import SEO from '@components/Seo';

export default function IndexPage() {
  return (
    <React.Fragment>
      <SEO />  
      <GlobalStyles />
      <Navigation />
      <Hero />
      <HomeGrid />
    </React.Fragment>
  )
};
