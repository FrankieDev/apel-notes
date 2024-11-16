import Folders from '@/components/Folders'
import { List } from '@/components/Notes'

import { bgColors } from '../lib/constants'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'

import Editor from '@/components/Editor'

export default function Home() {
  return (
    <div>
      <main>
        <ResizablePanelGroup
          direction='horizontal'
          className='w-full border rounded-none'
        >
          <ResizablePanel
            defaultSize={15}
            className='w-full md:w-[300px] md:max-w-[300px] md:min-w-[250px]'
          >
            <div
              className={`${bgColors.folders} p-2 border-r-gray-300 h-screen`}
            >
              <Folders />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            defaultSize={15}
            className='w-full md:w-[300px] md:max-w-[300px] md:min-w-[250px] border-r border-r-zinc-200'
          >
            <div className={`${bgColors.listNotes}`}>
              <List />
            </div>
          </ResizablePanel>
          <ResizablePanel defaultSize={70}>
            <Editor></Editor>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  )
}
