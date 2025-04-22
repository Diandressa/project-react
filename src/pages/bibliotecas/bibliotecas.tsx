import Card from "@/components/Card";
import Topo from "@/components/Topo";

const bibliotecas = [
    {
        lib: 'Bootstrap',
        tipo: 'Biblioteca',
        nivel: 'Avançado',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
    },
    {
        lib: 'Tailwind',
        tipo: 'Framework',
        nivel: 'Básico',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'
    }
]

export default function bibliotecasPage(){
    return(
        <div>
            <Topo/>
            <div className="flex flex-wrap gap-3 justify-center my-5">
                {
                    bibliotecas.map((item:any)=>{
                        return(
                            <Card linguagem={item.lib} tipo={item.tipo} nivel={item.nivel} img={item.img}/>
                        )
                    })
                }
            </div>
        </div>
    )
}