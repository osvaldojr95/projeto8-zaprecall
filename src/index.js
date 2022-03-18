import ReactDom from "react-dom";
import React from "react";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";

function App() {
    const [tela, setTela] = React.useState("tela1");

    function trocaTela(troca) {
        setTela(troca);
    }

    return (
        <>
            <Tela1
                className={["tela1", (tela === "tela1" ? "" : "hidden")]}
                trocaTela={trocaTela}
            />
            <Tela2
                className={["tela2", (tela === "tela2" ? "" : "hidden")]}
                trocaTela={trocaTela}
            />
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));