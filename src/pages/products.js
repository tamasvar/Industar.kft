import React,{useState} from 'react'
import HeroSection from '../components/HeroSectionImage'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { company } from '../components/HeroSectionImage/data'
import Productsall from '../components/Productsall'



const Products = () => {
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection {...company}/>
      <Productsall />
      
      <Footer/>
    </>
  )
}

export default Products