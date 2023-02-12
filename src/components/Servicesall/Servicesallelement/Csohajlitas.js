import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionVideo'
import { csohajlitas } from '../../HeroSectionVideo/data'
import { Modal } from "@mui/material";
import styled from 'styled-components';
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

const style={
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Csohajlitas = (  
) => {

  const[isOpen,setIsOpen]=useState(false)
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const handleOpen = (img) => {
    setOpen(true)
    setImage(img)
  };

  const handleClose = () => {
    setOpen(false)
    setImage(null)
  };
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
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/37BgoEhSJ0M" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              BLM E-TURN hajlítógépek kétfejes, jobbos és balos rendszerrel egyaránt.
                </TextWrapper> 
             
            </Column1>
             <Column2>
             <Subtitle darkText={true}>
             Pedrazzoli Bend Master 45
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/zn6mLzFfOOQ" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer>    
            
              <TextWrapper>
                Pedrazzoli Bend Master 45 csőhajlító berendezés, automata adagoló rendszerrel ellátott.
                </TextWrapper> 
            </Column2> 
          
          </InfoRow>
            
         
        </InfoWrapper>
        <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
              
              
               <ImgWrap onClick={() => handleOpen('/images/csohajlitas-1.jpg')}>
                <Img src='/images/csohajlitas-1.jpg' />
                </ImgWrap> 
              
            </Column1>
            <Column2>
              <ImgWrap onClick={() => handleOpen('/images/csohajlitas-2.jpg')}>
              
              <Img src='/images/csohajlitas-2.jpg' />
              </ImgWrap>
            </Column2>
            
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1>
              <ImgWrap onClick={() => handleOpen('/images/csohajlitas-5.jpg')}>
              <Img src='/images/csohajlitas-5.jpg' />
            
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap onClick={() => handleOpen('/images/csohajlitas-6.jpg')}>
              
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