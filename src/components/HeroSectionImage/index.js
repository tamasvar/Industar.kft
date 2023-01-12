import React,{useState} from 'react'
import { ButtonS } from '../ButtonElement'


import { 
    HeroContainer,
    HeroBg,
    HeroBtnWrapped,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowDown,
    ImageBg
    
 } from './HeroElements'

const HeroSection = ({
    to,
    heroH1,
    heroP,
    image,
    }) => {
    const{hover,setHover}=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            
            <ImageBg src={image}/>
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
            >
                {hover ? <ArrowForward/> : <ArrowDown/>}
            </ButtonS>
        </HeroBtnWrapped>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
