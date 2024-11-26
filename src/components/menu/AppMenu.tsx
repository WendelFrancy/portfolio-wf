import BtnsOptions from './BtnsOptions.tsx';
import CardForm from './CardForm.tsx';

function criarBtn() {
    const botaoteste = document.createElement('button');
    botaoteste.className = 'botaozin';
    botaoteste.innerHTML = 'teste';

    botaoteste.style.padding = '1rem';

    if (botaoteste.innerHTML !== "") {
        return menudiv.appendChild(botaoteste)
    }
}

function removerBtn() {
    let botaoexcluido = document.querySelectorAll('.botaozin')
    if (botaoexcluido.length > 0) {
        botaoexcluido[0].remove()
    } else {
        console.log('não tem botão cadastrado')
    }
}

const AppMenu = () => {
    //const [texto, setTexto] = useState("Testando") - É assim que se declara um useState. OBS: Importante lembrar de importar.
    return (
        <>
            <CardForm />
            <BtnsOptions
                contentBtn={"Criar um Cartão"}
                typeBtn={criarBtn}
            />
            <BtnsOptions
                contentBtn={"Remover um Cartão"}
                typeBtn={removerBtn}
            />
        </>
    );
}

export default AppMenu