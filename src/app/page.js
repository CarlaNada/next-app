import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-2 bg-zinc-50 font-sans dark:bg-black">
      <section className="flex w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/pngegg (1).png"
          alt="Lapiz"
          width={100}
          height={20}
          priority
        />

        <article className="mt-8 space-y-4">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            DeadNote
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Bienvenido a mi segundo cerebro
          </p>
          <p className="text-md text-zinc-600">
            Notas, tareas y agenda en un solo lugar.
          </p>
        </article>

        <article className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8 space-y-4">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full rounded-md border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href={"/notes"}
          >
            Notas
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full rounded-md border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href={"/todolist"}
            //target="_blank" --> abre nueva pestana
            rel="noopener noreferrer"
          >
            Tareas
          </Link>
        </article>
      </section>

      <section className="flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 m-10 py-10">
        <div className="p-8">
          <p className="text-zinc-400 font-mono">[ Aca van imágenes/videos ]</p>
        </div>
      </section>
    </main>
  );
}
