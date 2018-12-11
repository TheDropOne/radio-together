import React from 'react';

import Layout from 'components/Layout';
import { PageTitle, ParagraphHeader } from 'components/styled';

import Radiostation from './components/Radiostation';
import Track from './components/Track';

import * as SC from './Dashboard.styled';

const Dashboard = () => (
  <Layout>
    <PageTitle>Dashboard</PageTitle>
    <ParagraphHeader>Radiostations popular on Radion Together right now</ParagraphHeader>
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

    <ParagraphHeader>Some tracks you may like</ParagraphHeader>
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
  </Layout>
);

export default Dashboard;
