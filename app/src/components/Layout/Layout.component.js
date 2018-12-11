import React from 'react';

import Header from './components/Header';

import * as SC from './Layout.styled';

const Layout = ({ children }) => (
  <SC.Wrapper>
    <SC.Main>
      <Header />
      <SC.Section>
        {children}
      </SC.Section>
      <SC.Footer>© Radio Together 2018</SC.Footer>
    </SC.Main>
  </SC.Wrapper>
);

export default Layout;
