import React from 'react';
import Router from './router/Router';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Navigation />
    </div>
  );
};

export default App;
