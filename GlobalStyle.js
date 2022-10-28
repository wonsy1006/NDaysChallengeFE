import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

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
    color: ${({ theme }) => theme.colors.gr500};

    a {
      color: ${({ theme }) => theme.colors.gr500};
      text-decoration: none;
    }
  }

  #root {
    margin: 0 auto;
    max-width: 400px;
    min-height: 100vh;
    background: #fffbf2;
  }
  
`;
