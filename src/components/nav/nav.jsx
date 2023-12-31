import React from 'react'
import './Nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsBook2Line} from 'react-icons/ri'
import {BsBookmarkHeart} from 'react-icons/bs'
import { useState } from 'react'


const Nav = () => {
  const {activeNav,setActiveNav} = useState('')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')}className={activeNav === '#home' ? 'active':''}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''}><BsBookmarkHeart/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><RiContactsBook2Line/></a>
    </nav>
  )
}

export default Nav