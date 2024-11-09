'use client'
import React from 'react'
import '@blocknote/core/fonts/inter.css'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import { useCreateBlockNote } from '@blocknote/react'

export default function BlokeNote() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote()

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={'light'} />
}
