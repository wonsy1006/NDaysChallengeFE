import styled from 'styled-components';

const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

const colors = {
  // Primary Colors
  bl500: '#0B62AA',
  bl400: '#0F85E5',
  bl300: '#2F9AF2',
  bl200: '#7BBFF7',
  bl100: '#C3E2FC',
  bl50: '#F1F8FE',
  // Sub colors
  ye500: '#EEA702',
  ye400: '#FEBE2A',
  ye300: '#FED26B',
  ye200: '#FEE3A2',
  ye100: '#FFF4DB',
  ye50: '#FFFBF2',
  // Grayscale
  bk: '#000000',
  gr500: '#313131',
  gr400: '#626262',
  gr300: '#939393',
  gr200: '#C4C4C4',
  gr100: '#E5E5E5',
  gr000: '#FFFFFF',
  wh: '#ffffff',
  // Feedback colors
  rd: '#B51717',
  gr: '#10971E',
};

const common = {
  flexCenter: `
    display: flex,
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex,
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;