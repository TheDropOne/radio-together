import React from 'react';

import * as SC from './Header.styled';

const Header = () => (
  <SC.Header>
    <SC.Title>Radio Together</SC.Title>

    <SC.Search>Music, People, Radiostations</SC.Search>

    <SC.Profile>
      My Music
      <SC.Avatar src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
    </SC.Profile>

  </SC.Header>
);

export default Header;
