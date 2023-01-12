import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import img1 from '../../../images/elhajlitas_es_lemez_megmunkalas-1.jpg'
/*import img2 from '../../../images/csohajlitas-2.jpg'
import img3 from '../../../images/csohajlitas-3.jpg'
import img4 from '../../../images/csohajlitas-4.jpg'
import img5 from '../../../images/csohajlitas-5.jpg'
import img6 from '../../../images/csohajlitas-6.jpg'
/*import img7 from '../../../images/csohajlitas-7.jpg'
import img8 from '../../../images/csohajlitas-8.jpg'*/
import HeroSection from '../../HeroSectionVideo'
import { lemezmegmunkalas } from '../../HeroSectionVideo/data'
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


const Lemezmegmunkalas = () => {
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
        <HeroSection {...lemezmegmunkalas}/>
        <InfoContainer  lightBg={false} id={'lemezmegmunkalas'} >
        <Heading lightText={false}>Élhajlítás és lemez megmunkálás</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>Élhajlítógép: 3000 mm-es 160 t-ás. Lemezollónk: 3000 mm-es 6 mm-ig.</TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          
            
            <Column1>
              <Subtitle darkText={true}>
              Salvagnini
              </Subtitle>
              <iframe width="600px" height="400px" src="https://www.youtube.com/embed/tqGz5al7oEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <TextWrapper>
              
                </TextWrapper> 
             
            </Column1>
            <Column2>
            </Column2>
          
            
         
        </InfoWrapper>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
              <ImgWrap>
              <Img src={img1} />
            
              </ImgWrap>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Lemezmegmunkalas