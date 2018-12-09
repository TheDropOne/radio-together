import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Header = styled.h1`
  background-color: red;
`;

const App = () => (
  <Header>Hello world!</Header>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line
);
