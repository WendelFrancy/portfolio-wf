import { LogoMenu, MainMenu, OptionsMenu, OptionsMenuContainer } from './StsMenu.ts'

const AppMenu: () => JSX.Element = () => {


    return (<>
        <MainMenu>
            <LogoMenu 
            src="src\assets\warrow.png"
            />
            <OptionsMenuContainer>
                <OptionsMenu>Quem sou</OptionsMenu>
                <OptionsMenu>Habilidades</OptionsMenu>
                <OptionsMenu>Projetos</OptionsMenu>
                <OptionsMenu>Contato</OptionsMenu>
            </OptionsMenuContainer>
        </MainMenu>
    </>)
};

export default AppMenu