import React from 'react'
import ActionPanel from './ActionPanel'
import BlockNote from './BlockNote'

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
