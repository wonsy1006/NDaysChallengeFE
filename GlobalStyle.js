import { createGlobalStyle } from 'styled-components';
import normalize from './node_modules/styled-normalize/index';
import theme from './theme';

export default createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    min-height: 100%;
    color: #313131;
  }

  #root {
    margin: 0 auto;
    max-width: 400px;
    min-height: 100vh;
    background: #fffbf2;
  }

  a {
    color: #313131;
    text-decoration: none;
  }
`;
