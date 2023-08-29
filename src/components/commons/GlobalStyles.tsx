import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  a, button {
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
