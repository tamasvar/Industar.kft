import React,{useState} from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionVideo'
import {  lezervagas } from '../../HeroSectionVideo/data'
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

const Lezervagas = (  
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
        <HeroSection {...lezervagas}/>
        <InfoContainer  lightBg={false} id={'lezervagas'} >
        <Heading lightText={false}>Lézervágás</Heading>
        <InfoWrapper>
         <TopLine lightText={false}>Bérmunkában vállalunk nagy pontossággal lemezvágást síklemez lézervágó gépünkel, valamint cső és zártszelvény lézervágását új technológiás Lasertube Fiber gépünkkel.</TopLine>
         </InfoWrapper>      
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            
            <Column1>
              <Subtitle darkText={true}>
              Lasertube LT Fiber
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/YNnEI3ERysk" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer> 
              <TextWrapper>
              Lasertube LT Fiber
A lézergép a Lasertube család új rendszere, amit speciálisan terveztek és fejlesztettek. Fiber lézerforrással vágja a cső, illetve zártszelvény bármely részét. A Fiber lézer új technológiája jelentős előnyöket ajánl többféle anyag megmunkálás tekintetében - mint például a réz és sárgaréz; alumínium, saválló fém.

Megmunkási jellemzők: - Megmunkált munkadarab legnagyobb hossza: 6000 mm

Legnagyobb keresztmetszet:
- kerek keresztmetszet (átmérő): 225mm
- négyszög keresztmetszet: 160x160
- téglalap keresztmetszet: 200x100

Legkisebb keresztmetszet:
- kerek keresztmetszet (átmérő): 16mm 
- négyszög keresztmetszet: 16x16 
- téglalap keresztmetszet: 16x16
- Legnagyobb rúdsúly: 200 kg.

Főbb jellemzői:

- teljesen automatikus és programozható elrendezéssel van ellátva
- 3D Cad -Cam szoftver 
- optimalizált lézer technológiai adatbázis.
                </TextWrapper> 
             
            </Column1>
             <Column2>
            {/*  <Subtitle darkText={true}>
             Sík-lemez lézervágó gép
              </Subtitle>
              <VideoContainer>
              <VideoIframe
               src="https://www.youtube.com/embed/zn6mLzFfOOQ" frameBorder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
                 </VideoContainer>    
            
              <TextWrapper>
              Max. 1500*3000 lemezméret kivágására alkalmas.

                Lemezvastagság:
               <br/> - szénacél esetében 0,5-15 mm
               <br/>- Rozsdamentes acél: 0,5-12 mm.
               <br/>- Alumínium lemez 6 mm-ig
               <br/>- Rézlemez: 3 mm-ig
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               
                </TextWrapper>  */}
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

export default Lezervagas