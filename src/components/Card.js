import React from "react";
import ImgArrow from "./../resources/setinha.png"

export default function Card(props) {

    const { name, question, anwser, block, setBlock, addAnwserList } = props;
    const [state, setState] = React.useState("open");
    const [anwserType, setAnwserType] = React.useState("");
    let css = ["card", state, anwserType];
    let content;

    function acerto(anwser) {
        setAnwserType(anwser);
        setState("closed");
    }

    switch (state) {
        case "open":
            content = (
                <>
                    <h2>{name}</h2>
                    <ion-icon onClick={() => (state === "open" && block === false) ? setState("question") : ""} name="play-outline"></ion-icon>
                </>
            )
            break;

        case "question":
            setBlock(true);
            content = (
                <>
                    <span>{question}</span>
                    <img src={ImgArrow} alt="Seta para virar o card" onClick={() => setState("anwser")} />
                </>
            )
            break;

        case "anwser":
            content = (
                <>
                    <span>{anwser}</span>
                    <div className="botoes">
                        <button className="red-back" onClick={() => {
                            acerto("red");
                            addAnwserList("red");
                        }}>Não lembrei</button>
                        <button className="yellow-back" onClick={() => {
                            acerto("yellow");
                            addAnwserList("yellow");
                        }}><p>Quase não</p><p>lembrei</p></button>
                        <button className="green-back" onClick={() => {
                            acerto("green");
                            addAnwserList("green");
                        }}>Zap!</button>
                    </div>
                </>
            )
            break;

        case "closed":
            setBlock(false);
            content = (
                <>
                    <h2><del>{name}</del></h2>
                    <ion-icon name={anwserType === "green" ? "checkmark-circle" : (anwserType === "yellow" ? "help-circle" : "close-circle")}></ion-icon>
                </>
            )
            break;

        default:
            break;
    }

    return (
        <div className={css.join(' ')}>
            {content}
        </div>
    )
}