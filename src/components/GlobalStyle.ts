import styled, { createGlobalStyle } from 'styled-components';

export const ContainerNextBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NextBtn = styled.img`
    padding-top: 20px;
    height: 4rem;
    width: 4rem;
    margin-bottom: 2rem;
    &:hover {
        cursor: pointer;
    }
`;

export const ClickText = styled.p`
        strong{
            color: red;
        }
`;

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    text-decoration: none;
    font-family: 1rem;
    font-family: "Poppins", sans-serif;
    }

body {
    height: 400vh;
    }


`;