import React from "react";
import Card from "./Card";

export default function Container(props) {

    const { anwserList, attAnwserList } = props;
    const [block, setBlock] = React.useState(false);
    const listCards = getCards().sort(() => Math.random() - 0.5);

    function addAnwserList(anwser) {
        attAnwserList(anwser, anwserList[0].length === listCards.length - 1 ? true : false);
    }

    return (
        <div className="container">
            {
                listCards.map((card) => <Card key={listCards.indexOf(card)} name={"Pergunta " + (listCards.indexOf(card) + 1)} question={card.question} anwser={card.anwser} block={block} setBlock={setBlock} addAnwserList={addAnwserList} />)
            }
        </div>
    )
}

function getCards() {
    const list = [
        { question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { question: "O React é __", anwser: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", anwser: "letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", anwser: "expressões" },
        { question: "O ReactDOM nos ajuda __", anwser: "interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", anwser: "gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", anwser: "passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", anwser: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    return list;
}