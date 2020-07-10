import React from 'react';

import Navigation from '@components/Navigation';
import Footer from '@components/Footer';
import NavigationDrawer from '@components/NavigationDrawer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>
        <Navigation />
        {props.children}
      </div>
      <Footer />
      <NavigationDrawer/>
    </React.Fragment>
  ); 
};

export default Layout;
