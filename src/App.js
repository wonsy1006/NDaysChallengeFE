import React from 'react';
import Router from './router/Router';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Header />
      <Router />
      <Navigation />
    </Layout>
  );
};

export default App;
