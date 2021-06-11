import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;


    @media(max-width: 1280px){
      font-size: 56,25%;
    }

    @media(max-width: 760px){
      font-size: 50%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1.6rem "Roboto", sans-serif;

  }

  /* body{
    overflow-y: auto;
  }
  */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a{  
    color: inherit;
    text-decoration: none;
  }

`;