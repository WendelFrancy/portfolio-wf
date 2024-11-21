import App from '/src/App.jsx'
import Options from './Options';

const BtnsOptions = (removerBtn, criarBtn) => {

    function removerBtn() {
        let botaoexcluido = document.querySelectorAll('.botaozin')
        if (botaoexcluido.length > 0) {
            botaoexcluido[0].remove()
        } else {
            console.log('não tem botão cadastrado')
            console.log(botaoexcluido)
        }
    }

    function criarBtn() {
        const botaoteste = document.createElement("button")
        botaoteste.innerText = "teste"
        botaoteste.className = "botaozin"
        menudiv.appendChild(botaoteste)
    }


}

export default BtnsOptions