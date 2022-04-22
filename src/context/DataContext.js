import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export default function DataProvider({ children }) {

  const [data, setData] = useState([])
  const [info, setInfo] = useState([])

  const API = 'https://rickandmortyapi.com/api/character/'

  const fetchCharacters = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setData(data.results)
        setInfo(data.info)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchCharacters(API)
  }, [])

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  return (
    <DataContext.Provider value={{
      data,
      setData,
      info,
      setInfo,
      onPrevious,
      onNext
    }}>
      {children}
    </DataContext.Provider>
  )

}