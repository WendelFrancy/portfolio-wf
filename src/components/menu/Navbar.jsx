import { useState } from "react";
import CriarBtn from "./CriarBtn";
import RemoverBtn from "./RemoverBtn";

const Navbar = ({ corbotao }) => {
    //const [texto, setTexto] = useState("Testando") - É assim que se declara um useState. OBS: Importante lembrar de importar.
    return (
        <>
            <button onClick={CriarBtn}>
                Criar Botao
            </button>
            <button onClick={RemoverBtn}>
                Remover Botão
            </button>
        </>
    );
}

export default Navbar