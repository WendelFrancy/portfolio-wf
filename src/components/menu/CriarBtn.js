import App from '/src/App.jsx'

const CriarBtn = () => {
    const menudiv = document.getElementById('menudiv')
    const botaoteste = document.createElement("button")
    botaoteste.innerText = "teste"
    menudiv.appendChild(botaoteste)
}

export default CriarBtn