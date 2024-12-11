import { BgHome, HomeWelcome } from "./StsHome";

const AppHome = () => {

    return (
        <>
            <BgHome
            initial={{}}
            >
                <HomeWelcome
                    id='hometext'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >Olá! Seja bem-vindo</HomeWelcome>              

            </BgHome>
        </>
    )
};

export default AppHome