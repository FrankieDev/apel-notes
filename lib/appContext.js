import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [folderSelected, setFolderSelected] = useState(0)

  return (
    <AppContext.Provider value={{ folderSelected, setFolderSelected }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
