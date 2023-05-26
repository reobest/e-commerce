import React from 'react'
import logo from '../iamges/logo.svg'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer flex white'>
        <div className='footer-logo flex'>
          <img src={logo}></img>
          <p className='f-15 opacity'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
          visit our demo facility - we’re open 7 days a week.</p>
          <small className='f-15 opacity'>Copyright 2021. All Rights Reserved</small>
        </div>
        <div className='footer-navigate flex'>
            <div className='footer-navigate-pages'>
              <ul>
                 <Link to='/'><li>Home</li></Link>
                 <Link to='/headphones'><li>HEADPHONES</li></Link>
                 <Link to='/speakers'><li>SPEAKERS</li></Link>
                 <Link to='/earphones'><li>EARPHONES</li></Link>
              </ul>
            </div>
            <div className='footer-navigate-socials'>
             <button type='button' className='transparent'><AiFillFacebook/></button>
             <button type='button' className='transparent'><AiOutlineTwitter/></button>
             <button type='button'className='transparent'><AiOutlineInstagram/></button>
            </div>
        </div>
    </div>
  )
}

export default Footer