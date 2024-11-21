import { useState } from "react";
import BtnsOptions from "./BtnsOptions.jsx";

function criarBtn() {
    const botaoteste = document.createElement("button")
    botaoteste.innerText = "teste"
    botaoteste.className = "botaozin"
    menudiv.appendChild(botaoteste)
}

function removerBtn() {
    let botaoexcluido = document.querySelectorAll('.botaozin')
    if (botaoexcluido.length > 0) {
        botaoexcluido[0].remove()
    } else {
        console.log('não tem botão cadastrado')
    }
}

const Options = () => {
    //const [texto, setTexto] = useState("Testando") - É assim que se declara um useState. OBS: Importante lembrar de importar.
    return (
        <>
            <BtnsOptions 
            idBtn={'criar'} 
            contentBtn={'Criar um botão de teste'}
            typeBtn={criarBtn}
            />
            <BtnsOptions 
            idBtn={'remover'} 
            contentBtn={'Remover um botão de teste'}
            typeBtn={removerBtn}
            />
        </>
    );
}


export default Options