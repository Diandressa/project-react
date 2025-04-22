interface CardProps{
    linguagem: string,
    tipo: string,
    nivel: string,
    img: string
}
export default function Card(props:CardProps){
    return(
        <div className="flex flex-col justify-center border border-b-blue-500 p-3 rounded text-center">
            <img src={props.img} alt="Logo" width={'40px'} style={{margin:'auto'}}/>
            <div className="font-bold">Linguagem</div>
            <div className="font-bold">{props.tipo}:</div>
            <div>{props.linguagem}</div>
            <small className={`${props.nivel == "Básico" ? 'bg-cyan-500' : ' bg-amber-200'} text-black text-center rounded`}>{props.nivel}</small>
        </div>
    )
}