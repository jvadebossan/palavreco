import { createGlobalStyle } from "styled-components";
import config from "config.json";

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: white;
    }

    body{
        background-color: ${config.colors.background};
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`