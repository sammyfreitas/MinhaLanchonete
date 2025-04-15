import React from "react";

const itens = [
    { nome: "Bauru Simples", preco: 10.3, imagem: "/public/imagens/bauru.png" },
    { nome: "Bauru com Ovo", preco: 15.0, imagem: "/public/imagens/bauru_com_ovo.png" },
    { nome: "Hamburguer", preco: 7.0, imagem:"/public/imagens/hamburguer.png" },
    { nome: "Cheeseburguer", preco: 9.0, imagem: "/public/imagens/cheeseburguer.png" },
    { nome: "Cachorro Quente", preco: 7.0, imagem: "/public/imagens/cachorro_quente.png" },
    { nome: "Batata Frita", preco: 10.0, imagem: "/public/imagens/batataFrita.png" },
    { nome: "Guaravita", preco: 6.0, imagem: "/public/imagens/guaravita.png" },
    { nome: "Refrigerante", preco: 9.0, imagem: "/public/imagens/refrigerante.png" },
];

function Cardapio(){
    return(
        <div className="menu-container">
            {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h3> {item.nome}  </h3>
                    <p>R$ {item.preco.toFixed(2)}  </p> 
                    <img src={item.imagem} className="menu-item-img"></img>
                    <input type="number" className="quantidade-input" placeholder="Digite a quantidade de lanche" />
                </div>
            ))
            }
        </div>
    )
}




export default Cardapio;