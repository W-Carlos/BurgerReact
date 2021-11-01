import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Order from './containers/Order';
import GlobalStyle from './globalStyle';

ReactDOM.render(
    <>
      <Order /> <GlobalStyle />
    </>,
  document.getElementById('root')
);

