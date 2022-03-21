import React from 'react'
import test from '../images/pickle-rick.png'
import '../styles/Card.css'

export default function Card() {
  return (
    <div className='container'>
      <div className="img-container">
        <img src={ test } alt="Pickle Rick" />
      </div>
      <div className="character-data-container">
        <p>
          <strong>Name:</strong> Pickle Rick. <br />
          <strong>Status:</strong> Alive. <br />
          <strong>Species:</strong> Human. <br />
          <strong>Gender:</strong> Male. <br />
          <strong>Location:</strong> Earth.
        </p>
      </div>
    </div>
  )
}
