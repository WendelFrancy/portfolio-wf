import styled, { keyframes } from "styled-components";

const divTransition = keyframes` 
    0% {
        width: 100%;
    }
    20% {
        width: 0%;
    }
    50%{
        width: 0%;
    }    
    70% {
        width: 100%;
    }
`;

export const BgHome = styled.div`
    display: grid;
    position: relative;
    place-items: center;
    justify-items: center;
    height: 100vh;
    &:before {
        position: absolute;
        z-index: 1;
        content: '';
        background-color: black;
        width: 100%;
        height: 100%;
        animation: ${divTransition} 5s ease-in-out;
    }
`;

/*Animação para o text reveal na Home Page - Usado no Component HomeWelcome*/
const textSlide = keyframes` 
    0% {
        width: 100%;
    }
    20% {
        width: 0%;
    }
    50%{
        width: 0%;
    }    
    70% {
        width: 100%;
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
        border-right: 2px solid black;
        background-color: white;
        width: 100%;
        height: 100%;
        animation: ${textSlide} 7s ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`;


/* TO DO (CREATE THE ANIMATION TO SLIDE UP(LEFT) AND DOWN (RIGHT) CLEANING THE ENTIRE PAGE AND ENTERING
    NEW INFORMATIONS. THE RIGHT SIDE WILL HAVE A PICTURE AND THE LEFT THE INFORMATIONS ABOUT THE PIC. 
    
    WHAT IF I CUT IN OTHERS WAYS? LIKE TOP(RIGHT TO LEFT) AND DOWN(LEFT TO RIGHT) AND BEFORE CUT
    LEFT(DOWN TO TOP) AND RIGHT(TOP TO DOWN), IT MIGHT BE A GREAT ANIMATION.
    */




