import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { GiMusicSpell } from "react-icons/gi";

function Header() {
  return (
    <div> <Navbar className="bg-black">

      <Navbar.Brand href="/" className='text-white d-flex'>
      <GiMusicSpell className='icon fs-2 mx-3 my-1 ' />
      
       <h2 className='title'>Media Player</h2>
      
      </Navbar.Brand>
  
  </Navbar></div>
  )
}

export default Header