export default function Tela1(props){

    const {className, trocaTela} = props;

    return (
        <div className={className.join(' ')} >
            <img src="./resources/logo.png" alt="Logo"/>
            <h1>ZapRecall</h1>
            <button onClick={()=>{trocaTela("tela2")}}>
                Iniciar Recall!
            </button>
        </div>
    )
}