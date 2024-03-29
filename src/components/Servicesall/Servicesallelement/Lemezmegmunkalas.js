import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import styled from 'styled-components';
import HeroSection from '../../HeroSectionVideo'
import { Modal } from "@mui/material";
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
 
const Lemezmegmunkalas = () => {
   
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
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/tqGz5al7oEc" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              BLM E-TURN hajlítógépek kétfejes, jobbos és balos rendszerrel egyaránt.
                </TextWrapper> 
             
            </Column1>
            <Column2>
            </Column2>
          
            
         
        </InfoWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
          <Column1>

              <ImgWrap onClick={() => handleOpen('/images/elhajlitas_es_lemez_megmunkalas-1.jpg')}>
               <Img src='/images/elhajlitas_es_lemez_megmunkalas-1.jpg' />
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