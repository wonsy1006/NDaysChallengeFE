import React from 'react';
import ReactDOM from 'react-dom/client';
import './public/index.css';
import App from './src/App';
import { BrowserRouter } from './node_modules/react-router-dom/dist/index';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import store from './src/app/store';
import { Provider } from './node_modules/react-redux/es/exports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
