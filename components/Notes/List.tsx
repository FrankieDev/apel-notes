import React from 'react'
import Note from './Note'
import { IoListOutline, IoGridOutline, IoTrashOutline } from 'react-icons/io5'
import { Button } from '../ui/button'

const notes = [
  {
    id: 1,
    title: 'Title 1',
    content: 'Content 1'
  },
  {
    id: 2,
    title: 'Title 2',
    content: 'Content 2'
  }
]

function List() {
  return (
    <div>
      <div className='flex justify-between border-b border-b-zinc-100 p-2'>
        <div>
          <Button
            variant={'ghost'}
            size={'icon'}
            className=' text-zinc-500 [&_svg]:size-5'
          >
            <IoListOutline />
          </Button>
          <Button
            variant={'ghost'}
            size={'icon'}
            className='text-zinc-500 [&_svg]:size-5'
          >
            <IoGridOutline />
          </Button>
        </div>
        <div>
          <Button
            variant={'ghost'}
            size={'icon'}
            className='text-zinc-500 [&_svg]:size-5'
          >
            <IoTrashOutline />
          </Button>
        </div>
      </div>

      <div className='p-2'>
        {notes.length > 0
          ? notes.map((note) => <Note key={note.id} />)
          : 'No notes'}
      </div>
    </div>
  )
}

export default List
