import React from "react";
import Card from "./Card";

export default function Container(props) {

    const listCards = getCards();

    return (
        <div className="container">
            {listCards.map((card) => <Card name={card.name} question={card.question} anwser={card.anwser}/>)}
        </div>
    )
}

function getCards() {
    const list = [
        { name: "Pergunta 1", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 2", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 3", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 4", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 5", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 6", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 7", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 8", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" },
        { name: "Pergunta 9", question: "O que é JSX?", anwser: "JSX é uma sintaxe para escrever HTML dentro do JS" }
    ];

    return list;
}