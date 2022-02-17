import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-900: #121212;
    --black-700: #151515;
    --black-300: #343434;

    --gray-900: #292929;
    --gray-700: #7A7A7A;
    --gray-600: #b8b8b8;
    --gray-400: #E0E0E0;
    --gray-300: #F0F0F0;
    
    --green-800: #114808;
    --green-500: #1C6410;
    --green-300: #77D468;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h1, h2, h3, p, a, button {
    font-family: Montserrat;
  }

`