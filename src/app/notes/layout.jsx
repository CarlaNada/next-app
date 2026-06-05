import { getCategories } from "@/lib/notes"
import Aside from "@/app/components/Aside"

export default function NotasLayout ({ children }) {   
  const categorias = getCategories()

  return (
  <div className="flex min-h-screen bg-zinc-900">
    <Aside data={categorias} />
    {children}
  </div>
  )
}
