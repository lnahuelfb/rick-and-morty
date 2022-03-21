import React, { useState } from 'react'
import '../styles/SearchBar.css'

export default function SearchBar() {

  const [data, setData] = useState({
    name: ''
  })

  // const handleSubmit = (data) => {

  // }

  const handleChange = (e) => {
    setData({
      name: e.target.value
    })
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Nombre de personaje'
        value={data.name}
        name='name'
        onChange={handleChange}
        className='input'
      />
      <button
        type="button"
        className='button'
        placeholder='Buscar'
      >
        Buscar
      </button>
    </div>
  )
}