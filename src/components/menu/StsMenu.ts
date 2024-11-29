import styled from 'styled-components';


export const MainMenu = styled.section`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 2px -6px 10px black;
    height: 20vh;
    width: 100%;
    border-radius: 0 0 20px 20px;
`;

export const LogoMenu = styled.img`
height: 5rem;
width: 5rem;
`;

export const OptionsMenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
`;

export const OptionsMenu = styled.button`
    height: 100%;
    width: 100%;
    width: 7rem;
    background-color: unset;
    border: none;
    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 80%);
    }
`;

