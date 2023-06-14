import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/Marketing-Automation-removebg-preview.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header>
        <div class="container header__container">
          <h4>La web en tus manos</h4>
          <h1>Argen-Develo</h1>
          <h6 class="text-light">Inclusion Digital</h6>
          <CTA />
          <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt="me"/>
          </div>
          <a href='#contact' className='scroll__down'>ScrollDown</a>
        </div>
      </header>
  )
}

export default Header