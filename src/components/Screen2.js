import Container from "./Container";
import ImpLogo from "./../resources/logo-pequeno.png"

export default function Screen2(props) {

    let { className } = props;
    className = ["screen2", ...className];

    return (
        <div className={className.join(' ')} >
            <div className="top">
                <img src={ImpLogo} alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            <Container />
        </div>
    )
}