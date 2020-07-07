import React from 'react';
import PrismStyles from '@styles/PrismStyles';

import App from '@components/App';

/* Still trying to figure out how to import the js
file with the prism styles */

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
};
