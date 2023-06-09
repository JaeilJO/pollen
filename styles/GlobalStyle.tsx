import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Roboto } from 'next/font/google'

const roboto= Roboto({weight:['300','500','700'], subsets:[ 'cyrillic-ext']})


const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${roboto.style.fontFamily};
  }
`;

export default GlobalStyle;
