import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Order from './containers/Order';
import GlobalStyle from './styles/globalStyle';

ReactDOM.render(
    <>
      <Order /> <GlobalStyle />
    </>,
  document.getElementById('root')
);

