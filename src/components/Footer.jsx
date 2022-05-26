import React from 'react'
import Linkedin from '../images/linkedin.svg'
import GitHub from '../images/github.svg'
import WhatsApp from '../images/WhatsApp.svg'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer>
    <a href="https://porfolio-nahuelfb.vercel.app/" target='_blank' rel='noopener noreferrer'>
      <h3>Nahuel Fernandez Beschtedt</h3>
    </a>

    <div className="social">
      <a href='https://www.linkedin.com/in/nahuel-fernandez-beschtedt/' target='_blank' rel="noopener noreferrer">
        <img className='social-icons' src={Linkedin} alt="LinkedIn" />
      </a>

      <a href="https://github.com/lnahuelfb" target='_blank' rel="noopener noreferrer">
        <img className='social-icons' src={GitHub} alt='GitHub' />
      </a>

      <a href="https://api.whatsapp.com/send?phone=541163783961" target='_blank' rel="noopener noreferrer">
        <img className='social-icons' src={WhatsApp} alt='WhatsApp' />
      </a>
    </div>

  </footer>
  )
}
