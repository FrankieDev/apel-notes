import React from 'react'
import { IoGridOutline, IoShareOutline, IoCreateOutline } from 'react-icons/io5'
import { Button } from '../ui/button'

function ActionPanel() {
  return (
    <div className='flex justify-between border-b border-b-zinc-100 p-2'>
      <div>
        <Button
          variant={'ghost'}
          size={'icon'}
          className=' text-zinc-500 [&_svg]:size-5'
        >
          <IoCreateOutline />
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
          <IoShareOutline />
        </Button>
      </div>
    </div>
  )
}

export default ActionPanel
