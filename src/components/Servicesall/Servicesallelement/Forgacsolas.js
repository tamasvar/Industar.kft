import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionVideo'
import {  forgacsolas } from '../../HeroSectionVideo/data'
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

const Forgacsolas = (  
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
        <HeroSection {...forgacsolas}/>
        <InfoContainer  lightBg={false} id={'forgacsolas'} >
        <Heading lightText={false}>Forgácsolás</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>HURCO, Okuma, MAZAK, AJAN és CMA éc CNC berendezéseinkkel igen bonyolult megmunkálási feladatok is elvégezhetők. Ezek mellett hagyományos gépeinkel a szerszámkészítés szinte minden területét lefedjük.</TopLine>
         </InfoWrapper>      
        <InfoWrapper>
         <InfoRow>
            <Column1>
              <Subtitle darkText={true}>
              Hurco VMX30 CNC
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/m2FE4R3yrTk" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              Hurko VMX30 CNC megmunkáló központunk igen bonyolult megmunkálási feladatok elvégzésére is képes (3D marás).
               <br/> Fő paraméterek:
               <br/> - Az asztal felfogó felülete: 1016x508
               <br/> - Mozgástartomány: 760x510x610.
               <br/> - Megmunkálási méretek: 690x480.
                </TextWrapper> 
             
            </Column1>
             <Column2>
             <Subtitle darkText={true}>
             AJAN fúró-maró gép
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/MKW6QX6Kxqk" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer>    
              <TextWrapper>
              <br/> AJAN fúró-maró gép fő paraméterei:
              <br/> - asztal mérete: 4000x1500
              <br/> - Max. mozgatható munkadarab tömege: 2000 kg
              <br/> - Fordulatszám: 500-1500 [1/min]
              <br/> - Max. furat átmérő: 40 mm
              <br/> - Pozicionálási és ismétlési pontosság: 0,01 mm
                </TextWrapper> 
            </Column2> 
          
            </InfoRow>
        </InfoWrapper>
        <InfoWrapper>
         <InfoRow>
            <Column1>
              <Subtitle darkText={true}>
              Okuma eszterga
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/DCivsaIj74M" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              Automata cső adagoló rendszerrel kiegészítve.
                </TextWrapper> 
             
            </Column1>
             <Column2>
             <Subtitle darkText={true}>
             Mazak eszterga
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/-QMmx4v6ZFo" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer>    
              <TextWrapper>
              Maximum D350 átmérőjű, l-1500mm munkadarabok megmunkálása nagy pontossággal.
                </TextWrapper> 
            </Column2> 
          
            </InfoRow>
        </InfoWrapper>
        <InfoWrapper>
        
            <Column1>
              <Subtitle darkText={true}>
              CMA sorozatfúró berendezés
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/uC-44XgOvYk" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              CMA sorozatfúró berendezésünk Menetfúrásra, folyatófúrásra és marózási műveletek elvégzésére is alkalmas.
                </TextWrapper> 
             
            </Column1>
             
          
            
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

export default Forgacsolas