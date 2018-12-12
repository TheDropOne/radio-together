import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app';
import { GlobalStyle } from 'constants/styles';

ReactDOM.render(
  (
    <>
      <GlobalStyle />
      <App />
    </>
  ),
  document.getElementById('root'), // eslint-disable-line
);
