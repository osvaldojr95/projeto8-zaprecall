export default function Tela2(props){

    const {className, trocaTela} = props;

    return (
        <div className={className.join(' ')} >
        <button onClick={()=>{trocaTela("tela1")}}>
            Iniciar Recall!
        </button>
        </div>
    )
}