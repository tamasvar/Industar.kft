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

const HeroSectionCompany = () => {
    const{hover,setHover}=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
        </HeroBg>
    <HeroContent>
        <HeroH1>Industar kft</HeroH1>
        <HeroP>Cég bemutató</HeroP>
        <HeroBtnWrapped>
            <ButtonS
            smooth={true} 
            duration={500} 
            spy={true}
            exact='true' 
            to='timeline' 
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

export default HeroSectionCompany
