import React from 'react'
import {Button} from '../ButtonElement'
import { animateScroll as scroll } from 'react-scroll';
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
BtnWrap,
ImgWrap,
Img
} from './InfoElements'

export const homeObjOne={
  id:'about',
  lightBg:false,
  lightText:true,
  lightTextDesc:false,
  headline:'Cég bemutató',
  topLine:'Industár.kft',
  imgStart:false,
  //img:require('../../images/industar-kft-front.jpg'),
  alt:'Car',
  dark:true,
  primary:true,
  darkText:true,

};
const InfoSection = () => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
    
      <InfoContainer  lightBg={false} id={'about'} >
        <Heading lightText={false}>Cég bemutató</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            <TextWrapper> 
             <TopLine></TopLine>
              <Subtitle darkText={true}>
             
              </Subtitle>
              <BtnWrap>
                <Button to='company'
                onClick={toggleHome}
                dark={true}
                primary={true}
                darkText={true}
                >Bövebben</Button>
              </BtnWrap>
            </TextWrapper>
            </Column1>
             <Column2>
             
              <ImgWrap>
              <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
              </ImgWrap>
            </Column2> 
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
