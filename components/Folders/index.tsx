'use client'
import { useEffect, useState } from 'react'
import Folder from './Folder'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

import { type FolderType } from '@/db/schema'
import FormNewFolder from './FormNewFolder'
import { AppWrapper } from '@/lib/appContext'

type Folder = Pick<FolderType, 'id' | 'name'>

function Folders() {
  const [folders, setFolders] = useState<Folder[]>([])
  const [openModalNewFolder, setOpen] = useState(false)

  useEffect(() => {
    getFolders()
  }, [])

  const getFolders = async () => {
    const result = await fetch('/api/folders').then((res) => res.json())
    setFolders(result.data)
  }

  const addNewFolder = (folder: Folder) => {
    setFolders([...folders, folder])
  }

  return (
    <AppWrapper>
      <div className='flex flex-col justify-between w-full'>
        <div className='flex flex-col'>
          <h2 className='text-md text-gray-500 font-semibold mb-2 px-5'>
            Folders
          </h2>
          <div className='flex flex-col'>
            {folders.map((folder) => (
              <Folder key={folder.id} folder={folder} />
            ))}
          </div>
        </div>
        <Dialog open={openModalNewFolder} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant={'ghost'} className='text-zinc-600'>
              <IoAddCircleOutline className='text-4xl' />
              New Folder
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle className='text-md'>New Folder</DialogTitle>
            </DialogHeader>

            <FormNewFolder
              closeModalNewFolder={setOpen}
              addNewFolder={addNewFolder}
            ></FormNewFolder>
          </DialogContent>
        </Dialog>
      </div>
    </AppWrapper>
  )
}

export default Folders
