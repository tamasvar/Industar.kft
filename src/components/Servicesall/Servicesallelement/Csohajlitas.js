import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../../HeroSectionVideo'
import { csohajlitas } from '../../HeroSectionVideo/data'
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
ImgWrap,

} from './Servicesallelement'


const Csohajlitas = (
  Icon1,
  Icon2,
  Icon3,
  Icon4, 
  
  
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
        <HeroSection {...csohajlitas}/>
        <InfoContainer  lightBg={false} id={'csohajlitas'} >
        <Heading lightText={false}>Csőhajlítás</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>Hajlítógépeink kétfejes, jobbos, balos rendszerrel is ellátva.
         <br/> D8-D100-ig szénacél, rozsdamentes, alumínium minőségű csövek hajlítása alkalmasak magas minőségben.</TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            
            <Column1>
              <Subtitle darkText={true}>
              BLM E-TURN
              </Subtitle>
              <div class="ratio ratio-16x9">

              <iframe src="https://www.youtube.com/embed/37BgoEhSJ0M" title="YouTube video player" frameborder="0" allowFullScreen></iframe>
             
              </div>
              <TextWrapper>
              BLM E-TURN hajlítógépek kétfejes, jobbos és balos rendszerrel egyaránt.
                </TextWrapper> 
             
            </Column1>
             <Column2>
             <Subtitle darkText={true}>
             Pedrazzoli Bend Master 45
              </Subtitle>
              <div class="ratio ratio-16x9">

              <iframe src="https://www.youtube.com/embed/zn6mLzFfOOQ" title="YouTube video player" frameborder="0" allowFullScreen></iframe>

              </div>
            
              <TextWrapper>
                Pedrazzoli Bend Master 45 csőhajlító berendezés, automata adagoló rendszerrel ellátott.
                </TextWrapper> 
            </Column2> 
          
          </InfoRow>
            
         
        </InfoWrapper>
        
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            
              <ImgWrap>
              <Img src='/images/csohajlitas-1.jpg' />
            
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
              
              <Img src='/images/csohajlitas-2.jpg' />
              </ImgWrap>
            </Column2>
            
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1>
              <ImgWrap>
              <Img src='/images/csohajlitas-5.jpg' />
            
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
              
              <Img src='/images/csohajlitas-6.jpg' />
              </ImgWrap>
            </Column2>
            
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Csohajlitas