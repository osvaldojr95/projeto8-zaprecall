import ImpLogo from "./../resources/logo.png"

export default function Screen1(props) {

    let { className, switchScreen } = props;
    className = ["screen1", ...className];

    return (
        <div className={className.join(' ')} >
            <img src={ImpLogo} alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => { switchScreen("screen2") }}>
                Iniciar Recall!
            </button>
        </div>
    )
}