import styled, { keyframes } from "styled-components";
import { motion } from 'motion/react';
 
export const BgHome = styled(motion.div)`
    display: grid;
    position: relative;
    place-items: center;
    justify-items: center;
    height: 100vh;
`;

/*Animação para o text reveal na Home Page - Usado no Component HomeWelcome*/
const textSlide = keyframes` 
    0% {
        width: 100%;
        border-right: 2px solid black;
    }
    99% {
        border-right: 2px solid black;
    }    
    100% {
        width: 0%;
        border: none;
    }
`;

export const HomeWelcome = styled(motion.h1)`
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
        animation: ${textSlide} 2s ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`;


/* TO DO (CREATE THE ANIMATION TO SLIDE UP(LEFT) AND DOWN (RIGHT) CLEANING THE ENTIRE PAGE AND ENTERING
    NEW INFORMATIONS. THE RIGHT SIDE WILL HAVE A PICTURE AND THE LEFT THE INFORMATIONS ABOUT THE PIC. 
    
    WHAT IF I CUT IN OTHERS WAYS? LIKE TOP(RIGHT TO LEFT) AND DOWN(LEFT TO RIGHT) AND BEFORE CUT
    LEFT(DOWN TO TOP) AND RIGHT(TOP TO DOWN), IT MIGHT BE A GREAT ANIMATION.
    */




