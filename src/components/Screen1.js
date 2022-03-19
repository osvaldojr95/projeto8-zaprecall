import ImpLogo from "./../resources/logo.png"

export default function Screen1(props) {

    let { className, switchScreen } = props;
    let css = ["screen1", ...className];

    return (
        <div className={css.join(' ')} >
            <img src={ImpLogo} alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => { switchScreen("screen2") }}>
                Iniciar Recall!
            </button>
        </div>
    )
}