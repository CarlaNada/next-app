
// ..todolist/page.jsx

import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='flex justify-center items-center p-20 w-full'>
        <aside className="w-72 py-8 px-6 border-r border-zinc-800">
            <form className='flex flex-col flex-1 p-6 rounded-lg justify-center bg-zinc-800 font-sans'>   
                <p className='text-white text-lg font-semibold'>Crear Tarea</p>

                <input type="text" placeholder='Title' className='p-2 border border-zinc-600 rounded-md my-4' name="" id="" />
                <textarea placeholder='Content' className='p-2 border border-zinc-600 rounded-md my-4' rows={10} name="" id=""></textarea>
                <button className='bg-blue-500 text-wi=hite p-2 rounded-md'>Save</button>
            </form>
        </aside>

        
    </section>
  )
}


