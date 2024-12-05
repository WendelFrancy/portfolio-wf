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
    0% {
        width: 100%;
    }
    40% {
        width: 0%;
    }
    70%{
        width: 0%;
    }    
    90% {
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
        animation: ${textSlide} 8s ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`;


/* TO DO (CREATE THE ANIMATION TO SLIDE UP(LEFT) AND DOWN (RIGHT) CLEANING THE ENTIRE PAGE AND ENTERING
    NEW INFORMATIONS. THE RIGHT SIDE WILL HAVE A PICTURE AND THE LEFT THE INFORMATIONS ABOUT THE PIC. 
    
    WHAT IF I CUT IN OTHERS WAYS? LIKE TOP(RIGHT TO LEFT) AND DOWN(LEFT TO RIGHT) AND BEFORE CUT
    LEFT(DOWN TO TOP) AND RIGHT(TOP TO DOWN), IT MIGHT BE A GREAT ANIMATION.
    */



export const TransitionAnmContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

export const TransitionAnmLeft = styled.div`
    position: absolute;
    down: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: black;
`;

export const TransitionAnmRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 50%;
    width: 100%;
    background-color: black;
`;