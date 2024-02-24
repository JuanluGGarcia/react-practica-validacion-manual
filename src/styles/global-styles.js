import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    width: 80%;
    max-width: 1200px;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-image: url('/assets/images/bg-intro-mobile.png');
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-color: ${COLORS.LIGHTRED};
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
