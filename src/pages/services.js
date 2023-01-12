import React,{useState} from 'react'
import HeroSection from '../components/HeroSectionVideo'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Servicesall from '../components/Servicesall'
import { services } from '../components/HeroSectionVideo/data'

const Services = () => {
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection {...services}/>
      <Servicesall/>
      
      <Footer/>
    </>
  )
}

export default Services