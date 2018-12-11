import React from 'react';

import * as SC from './Track.styled';

const Track = ({ artist, album, title, cover }) => (
  <SC.Container>
    <SC.Image src={cover} />
    <SC.Aside>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{artist} - {album}</SC.Description>
    </SC.Aside>
  </SC.Container>
);

export default Track;
