import React, { createContext, useState } from 'react'

export const DataContext = createContext()
const API = 'https://rickandmortyapi.com/api'

export default function DataProvider({ children }) {

  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(false)

  const dataAPI = async () => {
    setLoading(true)

  }

  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  )

}