import React from 'react';

import Radiostation from './components/Radiostation';
import Track from './components/Track';

import * as SC from './Dashboard.styled';

const Dashboard = () => (
  <>
    <SC.PageTitle>Dashboard</SC.PageTitle>
    <SC.ParagraphHeader>Radiostations popular on Radio Together right now</SC.ParagraphHeader>
    <SC.Gallery>
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
      <Radiostation />
    </SC.Gallery>

    <SC.ParagraphHeader>Some tracks you may like</SC.ParagraphHeader>
    <SC.Grid>
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
      <Track album="Album" artist="Artist" title="Title" cover="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" />
    </SC.Grid>
  </>
);

export default Dashboard;
