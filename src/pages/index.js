import React,{useState} from 'react'
import HeroSection from '../components/HeroSectionVideo'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { home } from '../components/HeroSectionVideo/data'
import { services } from '../components/Services/data'
import Products from '../components/Products'
import ExpansionSection from '../components/ExpansionSection'
import Particles from '../components/Particles/particles'

const Home = () => {
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <><Particles/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/> 
       
      <HeroSection  {...home}/>
       <InfoSection /> 
       <ExpansionSection/>
      <Services {...services}/>
      <Products/>
      
       <Footer/> 
    </>
  )
}

export default Home
