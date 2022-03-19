import React from "react";
import ImgArrow from "./../resources/setinha.png"

export default function Card(props) {

    const { name, question, anwser } = props;
    const [state, setState] = React.useState("open");
    const [anwserType] = React.useState("");
    let classes = ["card", state, anwserType];
    let content;

    switch (state) {
        case "open":
            content = (
                <>
                    <h2>{name}</h2>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </>
            )
            break;

        case "question":
            content = (
                <>
                    <span>{question}</span>
                    <img src={ImgArrow} alt="Seta para virar o card" />
                </>
            )
            break;

        case "anwser":
            content = (
                <>
                    <span>{anwser}</span>
                    <div className="botoes">
                        <button className="red" onClick={() => { }}>Não lembrei</button>
                        <button className="yellow"><p>Quase não</p><p>lembrei</p></button>
                        <button className="green">Zap!</button>
                    </div>
                </>
            )
            break;

        case "closed":
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
        <div className={classes.join(' ')} onClick={()=> state==="open" ? setState("question") : ""}>
            {content}
        </div>
    )

}