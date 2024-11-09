type Folder = {
  id: number
  name: string
}

type Note = {
  id: number
  title: string
  content: string
  folderId: number
  date: string
}

export type { Folder, Note }
