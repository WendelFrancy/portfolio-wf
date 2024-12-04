import { BgHome, HomeWelcome } from "./StsHome";
/*import { ClickText, ContainerNextBtn, NextBtn } from "../GlobalStyle";*/


const AppHome = () => {

    return (
        <>
            <BgHome>
                <HomeWelcome
                    id='hometext'
                >Olá! Seja bem vindo</HomeWelcome>
                {/*
                <ContainerNextBtn>
                    <ClickText><strong>*</strong> Click to continue</ClickText>
                    <NextBtn
                        src="src\assets\seta-para-baixo.png"
                        onClick={() => { console.log('teste') }}
                    />
                </ContainerNextBtn>
                */}
            </BgHome>
        </>
    )
};

export default AppHome