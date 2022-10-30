import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
    }

    *::-webkit-scrollbar {
    display: none;
    }

    body {
    overflow: scroll;
    font-size: 1rem;
    
    }
    a {
        text-decoration: none;
    }
`;
