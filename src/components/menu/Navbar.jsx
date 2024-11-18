import { useState } from "react";
import CriarBtn from "./CriarBtn";

const Navbar = ({ corbotao }) => {
    //const [texto, setTexto] = useState("Testando") - É assim que se declara um useState. OBS: Importante lembrar de importar.
    return (
        <>
            <button onClick={CriarBtn}>
                Criar Botao
            </button>
        </>
    );
}

export default Navbar