import React from 'react';
import GlobalStyles from '@styles/GlobalStyles';

import Hero from '@components/Hero'
import Navigation from '@components/Navigation';
import SEO from '@components/Seo';

export default function IndexPage() {
  return (
    <div>
      <SEO />  
      <GlobalStyles />
      <Navigation />
      <Hero />  
      <h1>Test</h1>
      <h2>Double Test</h2>
      <p>Hocus Pocus</p>
    </div>
  )
};
