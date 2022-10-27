import React from 'react';
import ReactDOM from 'react-dom/client';
import './public/index.css';
import App from './src/App';
import { BrowserRouter } from './node_modules/react-router-dom/dist/index';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
