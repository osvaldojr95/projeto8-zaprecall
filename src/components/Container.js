import React from "react";
import Card from "./Card";

export default function Container(props) {

    const { anwserList, attAnwserList } = props;
    const [block, setBlock] = React.useState(false);
    const listCards = getCards();

    function addAnwserList(anwser) {
        attAnwserList(anwser, anwserList.length === listCards - 1 ? true : false );
    }

    return (
        <div className="container">
            {listCards.map((card) => <Card name={card.name} question={card.question} anwser={card.anwser} block={block} setBlock={setBlock} addAnwserList={addAnwserList} />)}
        </div>
    )
}

function getCards() {
    const list = [
        { name: "Pergunta 1", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 2", question: "O React é __", anwser: "uma biblioteca JavaScript para construção de interfaces" },
        { name: "Pergunta 3", question: "Componentes devem iniciar com __", anwser: "letra maiúscula" },
        { name: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", anwser: "expressões" },
        { name: "Pergunta 5", question: "O ReactDOM nos ajuda __", anwser: "interagindo com a DOM para colocar componentes React na mesma" },
        { name: "Pergunta 6", question: "Usamos o npm para __", anwser: "gerenciar os pacotes necessários e suas dependências" },
        { name: "Pergunta 7", question: "Usamos props para __", anwser: "passar diferentes informações para componentes" },
        { name: "Pergunta 8", question: "Usamos estado (state) para __", anwser: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    return list;
}