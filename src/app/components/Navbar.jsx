import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="sticky top-0 z-50 backdrop-blur-md flex items-center justify-between gap-2 font-sans p-3">
      <h2 className="flex text-3xl font-bold pl-3">
        <Link href={"/"}>DeadNote</Link>
      </h2>
      <div className="flex items-center justify-between gap-2 font-sans p-3">
        <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/"}>Inicio</Link>
        <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm  transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/notes"}>Notes</Link>
        <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm  transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/todolist"}>Lista de tareas</Link>
        <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm  transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/about"}>About</Link>
      </div>
      <Link href={"/profile"}>
        <Image
          className="rounded-full bg-white"
          src="/foto_capibara.jpeg"
          alt="Foto"
          width={48}
          height={48}
          priority
        />  
      </Link>
    </nav>
  )
  
}
