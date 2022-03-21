import ReactDom from "react-dom";
import React from "react";
import "./css/reset.css"
import "./css/style.css"
import "./css/media.css"
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";

function App() {
    const [screen, setScreen] = React.useState("screen1");

    function switchScreen(sw) {
        setScreen(sw);
    }

    return (
        <>
            <Screen1
                className={[(screen === "screen1" ? "" : "hidden")]}
                switchScreen={switchScreen}
                />
            <Screen2
                className={[(screen === "screen2" ? "" : "hidden")]}
                switchScreen={switchScreen}
            />
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));