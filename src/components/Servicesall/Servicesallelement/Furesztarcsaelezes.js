import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import { Modal } from "@mui/material";
import styled from 'styled-components';
import HeroSection from '../../HeroSectionVideo'
import {  furesztarcsaelezes } from '../../HeroSectionVideo/data'
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

const Furesztarcsaelezes = (
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
        <HeroSection {...furesztarcsaelezes}/>
        <InfoContainer  lightBg={false} id={'furesztarcsaelezes'} >
        <Heading lightText={false}>Fűrésztárcsa élezés</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>Új fűrésztárcsák készítése, felújítása, újra élezés, újra fogazás max: ø325 mm-ig.
          </TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          
            
        <Column1>
              <Subtitle darkText={true}>
              
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/UlhtNHEjdLc" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                <TextWrapper>
                  -----------------------------------------------------------------------------------------------------------------------------------------------------------
                </TextWrapper> 
                 </VideoContainer> 
              
             
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
            <ImgWrap onClick={() => handleOpen('/images/furesztarcsa_elezes-1.jpg')}>
               <Img src='/images/furesztarcsa_elezes-1.jpg' />
               </ImgWrap> 

            </Column1>
            <Column2>
            <ImgWrap onClick={() => handleOpen('/images/furesztarcsa_elezes-2.jpg')}>
               <Img src='/images/furesztarcsa_elezes-2.jpg' />
               </ImgWrap> 

            </Column2>
            </InfoRow>
            <InfoRow>
            <Column1>
            <ImgWrap onClick={() => handleOpen('/images/furesztarcsa_elezes-3.jpg')}>
               <Img src='/images/furesztarcsa_elezes-3.jpg' />
               </ImgWrap> 

            </Column1>
            <Column2>
            <ImgWrap onClick={() => handleOpen('/images/furesztarcsa_elezes-4.jpg')}>
               <Img src='/images/furesztarcsa_elezes-4.jpg' />
               </ImgWrap> 

            </Column2>
            </InfoRow>
        </InfoWrapper> 
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Furesztarcsaelezes