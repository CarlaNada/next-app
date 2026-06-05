import Link from "next/link";

export default function Aside ({ data }) {
  return(
    <aside className="w-50 py-8 px-6 border-r border-zinc-800">
      <div className="space-y-6 mt-8">
        {data.map((item, index) => (
          <div className="border-b pb-6 border-zinc-700" key={index}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <ul>
                {item.notes.map((subItem, index)  => (
                  <li key={index} className="pl-4 text-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-2xl">
                    <Link href={`/notes/${subItem.id}`}> {subItem.title} </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )

}
