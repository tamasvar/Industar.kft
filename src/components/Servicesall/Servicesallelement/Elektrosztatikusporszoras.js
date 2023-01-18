import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'

import HeroSection from '../../HeroSectionVideo'
import { elektrosztatikusporszoras } from '../../HeroSectionVideo/data'
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
Img,
ImgWrap
} from './Servicesallelement'


const Elektrosztatikusporszoras = (
  Icon1,
) => {
   /*const toggleHome=()=>{
    scroll.scrollToTop();
  }*/
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection {...elektrosztatikusporszoras}/>
        <InfoContainer  lightBg={false} id={'elektrosztatikusporszoras'} >
        <Heading lightText={false}>Elektrosztatikus porszórás</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>Wágner kétoldalas szórófülke, konvejorpályával és gázos beégető kemencével.
          <br/>- Maximális darabméret: 600 x 800 x 2500 mm
          <br/>- Beégetési hőmérséklet: max 240 C°
          <br/>- Pályasebesség: 0-1 m/perc
          </TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          
            
            
              <Subtitle darkText={true}>
              
              </Subtitle>
              <iframe width="600px" height="400px" src="https://www.youtube.com/embed/QhC-mS-H_hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              <TextWrapper>
              
                </TextWrapper> 
             
           
            <Column2>
            </Column2>
          
            
         
        </InfoWrapper>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
              <ImgWrap>
              <Img src='/images/elektrosztatikus_porszoras.jpg' />
            
              </ImgWrap>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Elektrosztatikusporszoras