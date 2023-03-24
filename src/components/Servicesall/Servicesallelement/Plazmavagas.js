import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import { Modal } from "@mui/material";
import HeroSection from '../../HeroSectionVideo'
import { plazmavagas } from '../../HeroSectionVideo/data'
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
VideoContainer,
VideoIframe
} from './Servicesallelement'

const style={
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const Plazmavagas = (
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
        <HeroSection {...plazmavagas}/>
        <InfoContainer  lightBg={false} id={'plazmavagas'} >
        <Heading lightText={false}>Plazmavágás</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>HP260A 3D típusú plazma és lángvágógép, 3000×6000 mm-es asztallal, AJAN CNC vezérléssel.
            <br/>- Lángvágási lemezvastagság: 200 mm
            <br/>- Plazmavágási lemezvastagság: 0,5-50 mm
            <br/>- 3000x6000 mm-es asztallal, AJAN CNC vezérléssel
          </TopLine>
         </InfoWrapper>      
        <InfoWrapper>
        
            
        <Column1>
              <Subtitle darkText={true}>
              HP260A 3D
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/sbkITA0M3Jc" frameBorder="0"
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
            <ImgWrap onClick={() => handleOpen('/images/plazmavagas-1.jpg')}>
               <Img src='/images/plazmavagas-1.jpg' />
               </ImgWrap> 

            </Column1>
            <Column2>
            <ImgWrap onClick={() => handleOpen('/images/plazmavagas-2.jpg')}>
               <Img src='/images/plazmavagas-2.jpg' />
               </ImgWrap> 

            </Column2>
            </InfoRow>
            <InfoRow>
            <Column1>
            <ImgWrap onClick={() => handleOpen('/images/plazmavagas-3.jpg')}>
               <Img src='/images/plazmavagas-3.jpg' />
               </ImgWrap> 

            </Column1>
            <Column2>
            <ImgWrap onClick={() => handleOpen('/images/plazmavagas-4.jpg')}>
               <Img src='/images/plazmavagas-4.jpg' />
               </ImgWrap> 

            </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Plazmavagas