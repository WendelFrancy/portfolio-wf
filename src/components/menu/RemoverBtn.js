import App from '/src/App.jsx'
import Navbar from './Navbar';

const RemoverBtn = () => {
    let botaoexcluido = document.querySelectorAll('.botaozin')
    if (botaoexcluido.length > 0) {
        botaoexcluido[0].remove()
    } else {
        console.log('não tem botão cadastrado')
        console.log(botaoexcluido)
    }

}

export default RemoverBtn