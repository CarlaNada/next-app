
// ..notes/[id]/page.jsx
import NoteDetail from '@/app/components/NoteDetail'
import { getNoteById } from '@/lib/notes'
import Link from 'next/link'
import React from 'react'



export default async function page({ params }) {
  const { id } = await params
  const nota = getNoteById(id)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NoteDetail note={nota} />
  </div>
  )
}

