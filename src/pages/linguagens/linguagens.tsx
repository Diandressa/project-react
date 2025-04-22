import Card from "@/components/Card";
import Topo from "@/components/Topo";

const linguagens = [
    {
        linguagem: 'Javascript',
        tipo: 'Programação',
        nivel: 'Intermediário',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        linguagem: 'PHP',
        tipo: 'Programação',
        nivel: 'Básico',
        img: 'https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png'
    },
    {
        linguagem: 'HTML',
        tipo: 'Marcação',
        nivel: 'Intermediário',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png'
    },
    {
        linguagem: 'CSS',
        tipo: 'Estilo',
        nivel: 'Intermediário',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    },
]

export default function linguagensPage(){
    return(
        <div>
            <Topo/>
            <div className="flex flex-wrap gap-3 justify-center my-5">
                {
                    linguagens.map((item:any)=>{
                        return(
                            <Card linguagem={item.linguagem} tipo={item.tipo} nivel={item.nivel} img={item.img}/>
                        )
                    })
                }
            </div>
        </div>
    )
}