import { useState } from "react";
import BtnsOptions from "./BtnsOptions.jsx";

const Options = () => {
    //const [texto, setTexto] = useState("Testando") - É assim que se declara um useState. OBS: Importante lembrar de importar.
    return (
        <>
            <button id={'criar'} onClick={BtnsOptions}>
                Criar Botao
            </button>
            <button id={'remover'} onClick={BtnsOptions}>
                Remover Botão
            </button>
            <button id={'editar'} onClick={BtnsOptions}>
                Remover Botão
            </button>

            
        </>
    );
}


export default Options