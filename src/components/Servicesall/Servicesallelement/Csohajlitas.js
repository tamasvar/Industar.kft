import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import img1 from '../../../images/csohajlitas-1.jpg'
import img2 from '../../../images/csohajlitas-2.jpg'
//import img3 from '../../../images/csohajlitas-3.jpg'
//import img4 from '../../../images/csohajlitas-4.jpg'
import img5 from '../../../images/csohajlitas-5.jpg'
import img6 from '../../../images/csohajlitas-6.jpg'
/*import img7 from '../../../images/csohajlitas-7.jpg'
import img8 from '../../../images/csohajlitas-8.jpg'*/
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


const Csohajlitas = () => {
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
         <TopLine lightText={false}>Hajlítógépeink kétfejes, jobbos, balos rendszerrel is ellátva, D8-D100-ig szénacél, rozsdamentes, alumínium minőségű csövek hajlítása alkalmasak magas minőségben.</TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            
            <Column1>
              <Subtitle darkText={true}>
              BLM E-TURN
              </Subtitle>
              
              <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/37BgoEhSJ0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             
              
              <TextWrapper>
              BLM E-TURN hajlítógépek kétfejes, jobbos és balos rendszerrel egyaránt.
                </TextWrapper> 
             
            </Column1>
             <Column2>
             <Subtitle darkText={true}>
             Pedrazzoli Bend Master 45
              </Subtitle>
             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zn6mLzFfOOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
              <Img src={img1} />
            
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
              
              <Img src={img2} />
              </ImgWrap>
            </Column2>
            
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1>
              <ImgWrap>
              <Img src={img5} />
            
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
              
              <Img src={img6} />
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