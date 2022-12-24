import React,{useState} from 'react'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'

import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapped,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
 } from './HeroElements'

const HeroSection = () => {
    const{hover,setHover}=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} 
            type='video/mp4'/>
        </HeroBg>
    <HeroContent>
        <HeroH1>Industar kft</HeroH1>
        <HeroP>Fém megmunkáló gyár</HeroP>
        <HeroBtnWrapped>
            <Button 
            to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            >
                Kezd ell{hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapped>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
