import React from 'react';

import * as SC from './Layout.styled';

const Layout = ({ children, header }) => (
  <SC.Wrapper>
    <SC.Main>
      {header}

      <SC.Section>
        {children}
      </SC.Section>

      <SC.Footer>© Radio Together 2018</SC.Footer>
    </SC.Main>
  </SC.Wrapper>
);

export default Layout;
