import React,{useState} from 'react'
import { ButtonS } from '../ButtonElement'
import { FaAngleDown } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapped,
    HeroContent,
    HeroH1,
    HeroP,
    
 } from './HeroElements'

 const arrowDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(5px);
  }
`;

const Arrow = styled(FaAngleDown)`
  color: black;
  font-size: 30px;
  animation: ${arrowDown} 0.7s ease-in-out infinite;
`;   
const HeroSection = ({
    to,
    heroH1,
    heroP,
    video,
}) => {
    const{hover,setHover}=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
    
  return (
    <HeroContainer  >
        <HeroBg>
            <VideoBg preload='auto' autoPlay loop muted src={video} 
            type='video/mp4'/>
        </HeroBg>
    <HeroContent>
        <HeroH1>{heroH1}</HeroH1>
        <HeroP>{heroP}</HeroP>
        <HeroBtnWrapped>
            <ButtonS 
             smooth={true} 
             duration={500} 
             spy={true}
             exact='true' 
             to={to} 
             offset={-80}
             onMouseEnter={onHover} 
             onMouseLeave={onHover}
             primary='true'
             dark='true'
             ><Arrow />
                 {/* {hover ? <ArrowForward/> : <ArrowDown/>} */}
            </ButtonS>
        </HeroBtnWrapped>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
