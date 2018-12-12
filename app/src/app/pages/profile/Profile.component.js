import React from 'react';

import Playlist from './components/Playlist';

import * as SC from './Profile.styled';

const Profile = () => (
  <>
    <SC.Header>
      <SC.AvatarImage src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <SC.Aside>
        <SC.Caption>Profile</SC.Caption>
        <SC.Description>Daniel Krachkouski</SC.Description>
      </SC.Aside>
    </SC.Header>

    <SC.ParagraphHeader>Playlists</SC.ParagraphHeader>
    <SC.Grid>
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </SC.Grid>
  </>
);

export default Profile;
