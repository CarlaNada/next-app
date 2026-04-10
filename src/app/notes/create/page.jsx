import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className='flex justify-center items-center p-20 w-full'>
      <form className='flex flex-col flex-1 p-6 rounded-lg justify-center bg-zinc-800 font-sans'>
        
        <Link href={"/notes"} className='self-start mb-4 text-white font-semibold'>
            &larr; Back to Notes
        </Link>
        
        <p className='text-white text-lg font-senibold'>Create Note</p>

        <input type="text" placeholder='Title' className='p-2 border border-zinc-600 rounded-md my-4' name="" id="" />
        <textarea placeholder='Content' className='p-2 border border-zinc-600 rounded-md my-4' rows={10} name="" id=""></textarea>
        <button className='bg-blue-500 text-wi=hite p-2 rounded-md'>Save</button>

      </form>
    </section>
  )
}

export default page
