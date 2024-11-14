import { useState } from "react";

const Navbar = ({ conteudoCor }) => {
    const [texto, setTexto] = useState("Testando")

    return (
        <>
            <h1 style={{ color: conteudoCor }}>{texto}</h1>
            <button onClick={() => {setTexto('Mudei  estado')}}>Alterar o texto</button>
        </>
    );
}

export default Navbar