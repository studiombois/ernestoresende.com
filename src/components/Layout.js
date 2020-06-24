import React from 'react';

import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>
        <Navigation />
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  ); 
};

export default Layout;
