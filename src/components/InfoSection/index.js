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
        <Heading lightText={false}>Cégismertető</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            <TextWrapper> 
             <TopLine></TopLine>
              <Subtitle darkText={true}>
              Az Industar Kft. széleskörű szolgáltatásokat nyújt, beleértve a tervezést, a prototípusgyártást, az egyedi és sorozatgyártást. A cég fő profilja a fémmegmunkálás a következőket tartalamzza: csőhajlítás, darabolás, lézervágás, plazmavágás, forgácsolás, élhajlítás, szerszámgép alkatrészek, speciális alkatrészek amelyeket a legmagasabb minőségi sztenderdeknek megfelelően készítenek.
              
              A csapat magasan képzett szakemberekből áll, akik kiváló szaktudással és tapasztalattal rendelkeznek a fém megmunkálási folyamatokban. A cél, hogy magas minőségű fémalkatrészeket készítsen, amelyek megfelelnek az ügyfelek specifikációinak és követelményeinek.
             
              A cég modern gépparkkal rendelkezik, amelyek lehetővé teszik a legösszetettebb projektek végrehajtását is. A vállalat folyamatosan fejleszti a technológiáit és az eljárásait.
             
              Az Industar Kft. ügyfélorientált vállalkozás, és a törekvése, hogy megfeleljen az ügyfelek elvárásainak, valamint hogy biztosítsa a magas minőséget és hatékonyságot. Ha Önnek fém megmunkálásra van szüksége, akkor az Industar Kft. kiváló választás lehet Önnek.
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
              <Img src="/images/industar-kft-front.jpg" alt={'cég'}/>
              </ImgWrap>
            </Column2> 
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
