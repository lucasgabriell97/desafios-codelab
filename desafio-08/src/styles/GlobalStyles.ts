import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --brand-color: #ffbd48;

    --dark: #2e2e2e;

    --gray: #fefbf4;

    --white: #fff;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Inter", sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  span,
  button {
    display: inline-block;
  }
`