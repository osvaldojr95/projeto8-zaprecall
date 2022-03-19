export default function Footer(props) {

    const { anwserList } = props;

    return (
        <footer >
            <h3>{anwserList[1].length}/{anwserList[2]} CONCLUÍDOS</h3>
            <div icons>
                {anwserList[1].map((anwser) => {
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

