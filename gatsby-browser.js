import React from 'react';

import App from '@components/App';

require("@styles/PrismStyles.css");

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
};
