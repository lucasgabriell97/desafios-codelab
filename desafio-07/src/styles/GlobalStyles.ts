import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --brand-color-purple: #8958ff;
    --brand-color-paper: #ffe3bd;

    --dark: #000014;
    --white: #ffffff;
  }

  body {
    font-family: "Jolly Lodger", system-ui;
    background: #261856;
    background-image: radial-gradient(circle, #261856, #000014 86%);
    min-height: 100vh;
  }
`