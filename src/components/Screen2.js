import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import React from "react";

export default function Screen2(props) {

    let { className } = props;
    let css = ["screen2", ...className];
    const [anwserList, setAnwserList] = React.useState([[], false, 8]);

    function attAnwserList(anwser, status) {
        anwserList[0].push(anwser);
        anwserList[1] = status;
        setAnwserList([...anwserList]);
    }

    return (
        <>
            <div className={css.join(' ')} >
                <Header />
                <Container anwserList={anwserList} attAnwserList={attAnwserList} />
                <Footer hidden={css} anwserList={anwserList} />
            </div>
        </>
    )
}