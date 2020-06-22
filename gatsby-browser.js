import React from 'react';

import App from '@components/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
};
