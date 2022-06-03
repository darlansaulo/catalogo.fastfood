import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

  body {
    background: ${(props) => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  }
`;
