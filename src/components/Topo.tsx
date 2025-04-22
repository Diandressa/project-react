import Link from "next/link";

export default function Topo(){
    return(
        <div className="flex flex-col bg-indigo-500 justify-center items-center py-3">
            <span className="italic">
                Portfólio
            </span>
            <div className="text-xl">
                {'{{ Linguagens }}'}
            </div>
            <nav className="flex pt-2 gap-3 nav">
                <Link href={'/'} className="hover:text-amber-400 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                    Home
                </Link>
                <Link href={'/linguagens/linguagens'} className="hover:text-amber-400 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                    Linguagens
                </Link>
                <Link href={'/bibliotecas/bibliotecas'} className="hover:text-amber-400 hover:scale-110 transition delay-150 duration-300 ease-in-out">
                    Bibliotecas
                </Link>
            </nav>
        </div>
    )
}