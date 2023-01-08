import React,{useState} from 'react'
import {Button} from '../../ButtonElement'
import { ImageViewer } from "react-image-viewer-dv"
import { animateScroll as scroll } from 'react-scroll'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import img1 from '../../../images/csohajlitas-1.jpg'
import img2 from '../../../images/csohajlitas-2.jpg'
import img3 from '../../../images/csohajlitas-3.jpg'
import img4 from '../../../images/csohajlitas-4.jpg'
import img5 from '../../../images/csohajlitas-5.jpg'
import img6 from '../../../images/csohajlitas-6.jpg'
import img7 from '../../../images/csohajlitas-7.jpg'
import img8 from '../../../images/csohajlitas-8.jpg'

import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
ImgWrap,
Img
} from './Servicesallelement'
import { Gallery } from 'react-grid-gallery'

export const homeObjOne={
  id:'about',
  lightBg:false,
  lightText:true,
  lightTextDesc:false,
  headline:'Cég bemutató',
  topLine:'Industár.kft',
  imgStart:false,
  //img:require('../../images/industar-kft-front.jpg'),
  alt:'Car',
  dark:true,
  primary:true,
  darkText:true,

};
const Csohajlitas = () => {
   const toggleHome=()=>{
    scroll.scrollToTop();
  }
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
      <InfoContainer  lightBg={false} id={'about'} >
        <Heading lightText={false}>Csőhajlítás</Heading>
        
         <TopLine lightText={false}>Hajlítógépeink kétfejes, jobbos, balos rendszerrel is ellátva, D8-D100-ig szénacél, rozsdamentes, alumínium minőségű csövek hajlítása alkalmasak magas minőségben.</TopLine>
               
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            
            <Column1>
              <Subtitle darkText={true}>
              BLM E-TURN
              </Subtitle>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/37BgoEhSJ0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <TextWrapper>
              BLM E-TURN hajlítógépek kétfejes, jobbos és balos rendszerrel egyaránt.
                </TextWrapper> 
             
            </Column1>
             <Column2>
             <Subtitle darkText={true}>
             Pedrazzoli Bend Master 45
              </Subtitle>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/zn6mLzFfOOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <TextWrapper>
                Pedrazzoli Bend Master 45 csőhajlító berendezés, automata adagoló rendszerrel ellátott.
                </TextWrapper> 
            </Column2> 
          
          </InfoRow>
        
            
         
        </InfoWrapper>
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Csohajlitas