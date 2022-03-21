import Parabens from "./../resources/party.png"
import Putz from "./../resources/sad.png"

export default function Footer(props) {

    const { anwserList, hidden } = props;
    let information;

    if (anwserList[1] === true) {
        if (anwserList[0].indexOf("red") === -1) {
            information = (
                <>
                    <div className="aviso">
                        <img src={Parabens} alt="emoticon festa" />
                        <h3>PARABÉNS!</h3>
                    </div>
                    <h4>Você não esqueceu de nenhum flash!</h4>
                </>
            )
        } else {
            information = (
                <>
                    <div className="aviso">
                        <img src={Putz} alt="emoticon triste" />
                        <h3>PUTZ!</h3>
                    </div>
                    <h4>Ainda faltaram alguns... Mas não desanime!</h4>
                </>
            )
        }
    } else {
        information = (
            <>
                <h4>{anwserList[0].length + "/" + anwserList[2] + " CONCLUÍDOS"}</h4>
            </>
        )
    }

    return (
        <footer className={anwserList[1] === true ? " extend" : "info"}>
            {information}
            <div className={"icons" + (anwserList[0].length === 0 ? " hidden" : "")}>
                {anwserList[0].map((anwser) => {
                    return (
                        <span className={anwser} >
                            <ion-icon name={anwser === "green" ? "checkmark-circle" : (anwser === "yellow" ? "help-circle" : "close-circle")}></ion-icon>
                        </span>
                    )
                })}
            </div>
        </footer>
    )
}

