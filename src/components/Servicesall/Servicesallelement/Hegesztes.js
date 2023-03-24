import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionVideo'
import {  hegesztes } from '../../HeroSectionVideo/data'
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

const Hegesztes = (  
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
        <HeroSection {...hegesztes}/>
        <InfoContainer  lightBg={false} id={'hegesztes'} >
        <Heading lightText={false}>Hegesztés</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>ABB hegesztő robotunk segítségével impulzusos és rövidzárlatos hegesztéssel (MIG és MAG) a legkülönfélébb anyagokat is meg tudjuk munkálni. Munkatársaink cső vázak, karok, fogantyúk, és egyéb alkatrészek hegesztését végzik magas minőségben.
          </TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          
        <InfoRow>  
        <Column1>
              <Subtitle darkText={true}>
              ABB welding robot machine
              </Subtitle>
              
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/avnQrg9GLi0" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                </VideoContainer>
                 <TextWrapper>
                 MIG- MAG hegesztés, különböző anyagokkal, pl: AlMg, AlSi, MCWFe, BFCWFe, FCW SS. Impulzus és rövidzárlatos hegesztés 0,008 ismétlési pontossággal, maximum 800mm/sec sebességgel.
                </TextWrapper> 
               
            </Column1>
              <TextWrapper>
              
                </TextWrapper> 
            <Column2>
           
              <Subtitle darkText={true}>
              Cső vázak, karok, fogantyúk hegesztése
              </Subtitle> 
              
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/M7jDQ8SYbsA" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                </VideoContainer>
                <TextWrapper>
                 Munkatársaink cső vázak, karok, fogantyúk, és egyéb alkatrészek hegesztését végzik magas minőségben.
                </TextWrapper> 
               
            </Column2>
          
            </InfoRow>
         
        </InfoWrapper>
        {/* <Modal sx={style}  open={open} onClose={handleClose}>
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
        </InfoWrapper> */}
      </InfoContainer>
      <Footer/>
    </>
  )
}

export default Hegesztes