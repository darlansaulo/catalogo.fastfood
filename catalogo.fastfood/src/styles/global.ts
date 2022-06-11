import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Russo One', sans-serif;
    }

    body {
      background-color: #fff;
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
`;
