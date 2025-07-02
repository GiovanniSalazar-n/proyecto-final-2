import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.base};
    color: ${props => props.theme.colors.Text};
    line-height: 1.5;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  * {
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    font-family: inherit;
  }
`;

export default GlobalStyles;