'use client'
import React from 'react'
import ActionPanel from './ActionPanel'
import dynamic from 'next/dynamic'
const BlockNote = dynamic(() => import('@/components/Editor/BlockNote'), {
  ssr: false
})

function Editor() {
  return (
    <div>
      <ActionPanel></ActionPanel>

      <div className='p-2'>
        <BlockNote></BlockNote>
      </div>
    </div>
  )
}

export default Editor
