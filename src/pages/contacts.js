import React,{useState} from 'react'
import HeroSection from '../components/HeroSectionImage'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Contact from '../components/Contacts'
import {contacts} from '../components/HeroSectionImage/data'
import Particles from '../components/Particles/particles'

const Contacts = () => {
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <><Particles/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection {...contacts}/>
      <Contact/>
      
      
      <Footer/>
    </>
  )
}

export default Contacts