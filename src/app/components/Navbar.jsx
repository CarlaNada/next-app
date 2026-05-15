import Link from "next/link";

export default function Navbar(params) {
  return(
    <nav className="flex items-center justify-center gap-2 font-sans bg-zinc-900 p-3">
      <h2 className="text-3xl font-bold">
        <Link href={"/"}>DeadNote</Link>
      </h2>
      <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/"}>Inicio</Link>
      <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm  transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/notes"}>Notes</Link>
      <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm  transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/about"}>Perfil</Link>
      <Link className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm  transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]" href={"/todolist"}>Lista de tareas</Link>
    </nav>
  )
  
}
