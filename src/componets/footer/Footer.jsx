import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {RxGithubLogo} from 'react-icons/rx'
import {BsFacebook} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='redes_sociales'>
        <div className='socialmeida'>
        <h4>Siguenos en...</h4>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'><CiLinkedin/></a>
        <a href='https://github.com' target='_blank' rel='noreferrer'><RxGithubLogo/></a>
        <a href='https://Facebook.com' target='_blank' rel='noreferrer'><BsFacebook/></a>
        </div>
      </div>
      <div className='info_copy'>
        <div className='footer_copyringht'>
          <p>
            @{new Date().getFullYear()}Argen Develop. All rigth reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer