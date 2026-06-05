import { getProjects } from "@/lib/projects"

export default function Page () {
  const projects = getProjects()
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col w-full max-w-3xl items-center rounded-lg bg-zinc-800 p-10">
        <img src="/foto_capibara.jpeg" alt="Foto perfil" className="w-24 h-24 rounded-full"/>
        <h1 className="font-bold text-xl">Carla</h1>
        <p className="text-gray p-3">Estudiante de 3° año de Desarrollo de Software. Mi pasión es entender cómo funcionan las aplicaciones por dentro para asegurar que brillen por fuera. Tengo experiencia construyendo con Python (Django) y React (Next.JS)</p>
        <p className="flex gap-3 items center p-3">
          <svg width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
          Rio Cuarto, Cordoba, Argentina
        </p>
      </section>
      <section>
        <h3 className="font-bold text-xl">Projectos</h3>
        <div className="w-full max-w-3xl grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg bg-zinc-900 p-6">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
