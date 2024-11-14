'use client'
import React, { useEffect } from 'react'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'
import { Block } from '@blocknote/core'

export default function BlokeNote() {
  // State to store the document JSON.
  const [blocks, setBlocks] = React.useState<Block[]>([])

  // Creates a new editor instance.
  const editor = useCreateBlockNote()

  useEffect(() => {
    // Save the document JSON to database.
    console.log(blocks)
  }, [blocks])

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        // Saves the document JSON to state.
        setBlocks(editor.document)
        //console.log(JSON.stringify(editor.document))
      }}
      theme={'light'}
    />
  )
}
