import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import Header from 'components/Header';

import Dashboard from './dashboard';
import Profile from './profile';

const Pages = () => (
  <Layout header={<Header />}>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/user/" component={Profile} />
    </Switch>
  </Layout>
);


export default Pages;
