import ImpLogo from "./../resources/logo-pequeno.png"

export default function Header() {
    return (
        <header>
            <img src={ImpLogo} alt="Logo" />
            <h1>ZapRecall</h1>
        </header>
    )
}