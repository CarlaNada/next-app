import Link from "next/link";

export default function Footer () {
  return(
    <footer className="grid grid-cols-3 md:grid-cols-2 p-10 border border-white/10 gap-2 font-sans bg-zinc-900 p-3">
      
      <div className="flex flex-col items-center gap-3 text-white/80 w-full md:w-max mx-auto py-5">
        <h2 className="text-2xl font-bold">
          <Link href={"/"}>DeadNote</Link>
        </h2>
      </div>
      
      <div className="flex flex-col items-center gap-3 text-white/80 w-full md:w-max mx-auto">
        <p className="text-md font-semibold">
          <Link href={"/about"} className="p-2 rounded-xl hover:bg-zinc-700/20 hover:text-zinc-400 transition-all">Contacto</Link>
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 text-sm font-medium text-white/80 w-full md:w-max mx-auto">
        <h5 className="text-md font-semibold">REDES</h5>
        <div className="flex gap-4">
          <Link href="https://instagram.com" className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-xl hover:bg-zinc-600/20 hover:text-zinc-400 transition-all">
            IG
          </Link>
          <Link href="https://whatsapp.com" className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-xl hover:bg-zinc-600/20 hover:text-zinc-400 transition-all">
            WP
          </Link>
        </div>
      </div> 
    </footer>
  )
}
