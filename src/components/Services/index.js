import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import { 
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
 } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>asd</ServicesH2>
                <ServicesP>fasfewgrvsd</ServicesP>
            </ServicesCard>


        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services