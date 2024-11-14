import React from 'react'
import { IoFolderOutline } from 'react-icons/io5'

function Note() {
  console.log('Note Component created')
  return (
    <div
      className='rounded py-2 px-4 mb-2 border-b border-b-zinc-200 hover:bg-zinc-200 cursor-pointer overflow-hidden'
      role='button'
    >
      <p className='text-sm font-semibold text-zinc-700'>New Note</p>
      <div className='flex text-sm'>
        <div className='text-zinc-700 font-semibold'>10:16</div>
        <div className='text-zinc-500 ms-2'>No additional text</div>
      </div>
      <div className='flex items-center'>
        <IoFolderOutline className='text-zinc-400 text-sm h-4 w-4 min-w-4' />
        <h6 className='text-zinc-400 text-sm font-sans font-normal pl-1 line-clamp-1'>
          Social Media Content
        </h6>
      </div>
    </div>
  )
}

export default Note
