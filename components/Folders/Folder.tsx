import React from 'react'
import { IoFolderOutline } from 'react-icons/io5'
import { type FolderType } from '@/db/schema'
import { twMerge } from 'tailwind-merge'
import { useAppContext } from '@/lib/appContext'

type Proptype = {
  folder: Pick<FolderType, 'id' | 'name'>
}

const Folder: React.FC<Proptype> = ({ folder }) => {
  const { folderSelected, setFolderSelected } = useAppContext()

  console.log('Folder Component created')
  return (
    <div
      className={twMerge(
        'flex justify-between mb-1 py-1 px-5 rounded-md hover:bg-zinc-200 cursor-pointer',
        folderSelected == folder.id ? 'bg-zinc-300' : ''
      )}
      onClick={() => setFolderSelected(folder.id as number)}
    >
      <div className='flex items-center'>
        <IoFolderOutline className='text-yellow-500 h-5 w-5 min-w-5' />
        <h6 className='text-zinc-600 font-sans pl-2 line-clamp-1'>
          {folder.name}
        </h6>
      </div>
      <div className='text-zinc-500 font-sans px-1'>5</div>
    </div>
  )
}

export default Folder
