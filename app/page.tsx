import Folders from '@/components/Folders'
import { List } from '@/components/Notes'

import { bgColors } from '../lib/constants'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import BlockNote from '@/components/Editor/BlockNote'

export default function Home() {
  return (
    <div>
      <ResizablePanelGroup
        direction='horizontal'
        className='w-full border mb-5 rounded-none'
      >
        <ResizablePanel className='w-full lg:w-[300px] lg:max-w-[300px] lg:min-w-[250px]'>
          <div className={`${bgColors.folders} p-2 border-r-gray-300`}>
            <Folders />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className='w-full lg:w-[300px] lg:max-w-[300px] lg:min-w-[250px] border-r border-r-zinc-200'>
          <div className={`${bgColors.listNotes}`}>
            <List />
          </div>
        </ResizablePanel>
        <ResizablePanel defaultSize={75}>
          <BlockNote />
        </ResizablePanel>
      </ResizablePanelGroup>

      <main className='h-screen grid sm:grid-cols-[300px_minmax(900px,_1fr)_100px]'>
        <div className={`flex ${bgColors.folders} p-2 border-r-gray-300`}>
          <Folders />
        </div>
        <div className='grid grid-cols-[300px_minmax(900px,_1fr)_auto]'>
          <div className={`${bgColors.listNotes} p-2 border`}>
            <List />
          </div>
          <div className={`${bgColors.contentNote}`}>
            <h1 className='text-4xl font-bold'>Title Note</h1>
            <div>Detail</div>
          </div>
        </div>
      </main>
    </div>
  )
}
