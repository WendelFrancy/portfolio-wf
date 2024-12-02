import { useEffect, useRef } from "react";
import { BgHome, HomeWelcome, TextHide } from "./StsHome";


const AppHome = () => {
    
        const hidden = useRef<HTMLDivElement>(null)

        useEffect (() => {
            if(hidden.current){
                hidden.current.style.transition = '2s';
                hidden.current.style.transform = 'translateX(-300px)';
                hidden.current?.addEventListener('transitionend', () => {
                    hidden.current?.remove();
                });
                hidden.current?.removeEventListener('transitionend', () => {
                    hidden.current?.remove();
                });
            } else {
                console.log('não puxou')
            }

        },[])
        
      
    return (
        <>
            <BgHome>
                <TextHide
                id='hidden'
                ref={hidden}
                />
                <HomeWelcome
                id='hometext'
                >Olá! Seja bem vindo</HomeWelcome>
            </BgHome>
        </>
    )
};

export default AppHome