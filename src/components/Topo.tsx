import Link from "next/link";

export default function Topo(){
    return(
        <div className="flex flex-col bg-indigo-500 justify-center items-center py-3">
            <span className="italic">
                foldeR_code
            </span>
            <div className="text-xl">
                {'{{ Linguagens }}'}
            </div>
            <nav className="flex pt-2 gap-3">
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/linguagens/linguagens'}>
                    Linguagens
                </Link>
                <Link href={'/bibliotecas/bibliotecas'}>
                    Bibliotecas
                </Link>
            </nav>
        </div>
    )
}