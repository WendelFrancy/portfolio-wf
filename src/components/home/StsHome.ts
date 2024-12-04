import styled, { keyframes } from "styled-components";

export const BgHome = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    align-items: end;
    justify-items: center;
    height: 100vh;
`;

/*Animação para o text reveal na Home Page - Usado no Component HomeWelcome*/
const textSlide = keyframes` 
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
`;

export const HomeWelcome = styled.h1`
    position: relative;
    font-size: 6rem;
    font-weight: 600;
    color: #55AD9B; 
    &:before {
        z-index: 1;
        position: absolute;
        content: '';
        background-color: white;
        width: 100%;
        height: 100%;
        animation: ${textSlide} 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`;