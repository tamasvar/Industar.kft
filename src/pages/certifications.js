import React,{useState} from 'react'
import HeroSection from '../components/HeroSectionImage'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Certification from '../components/Certifications'
import {contacts} from '../components/HeroSectionImage/data'

const Certifications = () => {
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection {...contacts}/>
      <Certification/>
      
      
      <Footer/>
    </>
  )
}

export default Certifications