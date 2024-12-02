import styled, { createGlobalStyle } from 'styled-components';


export const NextBtn = styled.div`
    height: 4rem;
    width: 4rem;
    border: 1px solid black;
    border-radius: 8rem;
    margin-bottom: 2rem;
`;

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    text-decoration: none;
    }

body {
    height: 400vh;
    }


`;