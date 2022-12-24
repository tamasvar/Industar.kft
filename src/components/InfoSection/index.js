import React from 'react'
import {Button} from '../ButtonElement'
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
  img:require('../../images/industar-kft-front.jpg'),
  alt:'Car',
  dark:true,
  primary:true,
  darkText:true,

};
const InfoSection = () => {
  
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
              Cégünket 1962-ben id. Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.Jelenlegi tevékenységünk ifj.Török Pál vállalkozásának megkezdésével indult 1976-ban, majd kötőelem gyártással bővült és Török Sándor csatlakozásával 1980-tól már családi vállalkozássá fejlődött, és beindult a gépkocsimotor és karosszéria javítás.<br/> Az akkori karosszéria és alkatrész hiány szükségessé tette, hogy saját gyártású karosszéria-elemeket építsenek be a gépkocsikba. A karosszériaelemek gyártása 1985-ben kezdődött. Az alkalmazotti létszám akkor 5 fő volt.A piaci helyzet helyes felmérésével 1993-ban megkezdődtek a kipufugóelemek gyártásfejlesztései. <br/>A termelés bővítéséhez szükségessé vált egy nagyobb telephely. 

              </Subtitle>
              <BtnWrap>
                <Button to='company'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                /* primary={primary? 1:0}
                dark={dark ? 1:0} 
                 dark2={dark2 ? 1:0} */
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
