function Saudacao(props) {
return <h1>Ola, {props.nome}!</h1>;
}

<Saudacao nome= "Lucas"/>

props = {
    nome: "Lucas"
}

function Produto(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>R$ {props.preco}</p>
        </div>
    );
}

<Produto nome= "Notebook" preco= "3500"/>

function botao(props) {
    return(
        <button>
            {props.texto}
        </button>
    );
}

<Botao texto= "Salvar"/>

// Desestruturacao

function Saudacao2 ({nome}) {
    let nome = props.nome
    
}

function Usuario({nome, idade, cidade}) {
    return(
        <div>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>
    );
}

<Usuario
     nome= "Lucas"
     idade= {35}
     cidade= "Sao Paulo"
/>

//useState

function contador() {
    let numero = 0;

    function aumentar() {
        numero++
        console.log(numero)
    }
    return(
        <div>
            <h1>{numero}</h1>
            <button onclick={aumentar}>Aumentar</button>
            </div>
    )
}

import { useState } from "react";
function contador() {
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>Voce clicou {contador} vezes</p>
            <button onclick={() => setContador(contador + 1)}>Clique aqui</button>
            </div>
    )
}



function Nome() {
const [nome, setNome] = useState("");
    return (
        <div>
          <input onChange={(e) => setNome(e.target.value)}/>
            <h1>{nome}</h1>
            </div>
    )
    
}

function FormularioLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();
        console.log(`Email`, email)
        console.log(`Senha`, senha)
    }
    return (
        <form onSubmit={enviarFormulario}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder= "Digite seu email"/>
        </form>
    )
}
