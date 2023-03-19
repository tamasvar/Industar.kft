import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import { Modal } from "@mui/material";
import styled from 'styled-components';
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

const Elektrosztatikusporszoras = (
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
          
            
        <Column1>
              <Subtitle darkText={true}>
              Salvagnini
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/QhC-mS-H_hs" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              BLM E-TURN hajlítógépek kétfejes, jobbos és balos rendszerrel egyaránt.
                </TextWrapper> 
             
            </Column1>
              <TextWrapper>
              
                </TextWrapper> 
            <Column2>
            </Column2>
          
            
         
        </InfoWrapper>
        <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            <ImgWrap onClick={() => handleOpen('/images/elektrosztatikus_porszoras.jpg')}>
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