import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {RxGithubLogo} from 'react-icons/rx'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'><CiLinkedin/></a>
        <a href='https://github.com' target='_blank' rel='noreferrer'><RxGithubLogo/></a>
        <a href='https://Facebook.com' target='_blank' rel='noreferrer'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials