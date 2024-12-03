import styled, { keyframes } from "styled-components";

export const BgHome = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    align-items: end;
    justify-items: center;
    height: 100vh;
`;

export const TextHide = styled.div`
    position: absolute;
    top: 43%;
    left: 0;
    height: 8rem;
    width: 100%;
    background-color: black;
`;

/*Animação para o text reveal na Home Page*/
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
    font-size: 5rem;
    font-weight: 600;
    color: #55AD9B; 
    &:before {
        z-index: 1;
        position: absolute;
        content: '';
        background-color: white;
        width: 100%;
        height: 7rem;
        animation: ${textSlide} 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`;