import styled from 'styled-components';


export const MainMenu = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    left: 10%;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 15%);
    height: 20vh;
    border-radius: 0 0 20px 20px;
`;

export const LogoMenu = styled.img`
    height: 3rem;
    width: 4rem;
`;

export const OptionsMenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
`;

export const OptionsMenu = styled.button`
    height: 100%;
    width: 7rem;
    background-color: unset;
    border: none;
    font-size: 1rem;
    transition: .1s linear;
    &:hover {
        cursor: pointer;
        font-size: 1.1rem;
    }
`;

