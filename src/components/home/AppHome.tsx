import { useEffect, useRef } from "react";
import { BgHome, HomeWelcome } from "./StsHome";
import { NextBtn } from "../GlobalStyle";


const AppHome = () => {
        
    return (
        <>
            <BgHome>

                <HomeWelcome
                id='hometext'
                >Olá! Seja bem vindo</HomeWelcome>
                <NextBtn 
                src="src\assets\seta-para-baixo.png"
                />
            </BgHome>
        </>
    )
};

export default AppHome