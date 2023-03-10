import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { 
  Card,
  IconButton,
  Typography
} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Pdf1 from '../../pdf/GINOP-1-2-1-16-2017-00977.pdf'

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
const text= {
  textAlign: "center",
  flex: "1",
};
const iconButton= {
  padding: "0.5rem",

};
const cards={
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  margin: "1rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  '@media (max-width: 786px)': {
    
    width:"520px",
   
    
  },
  '@media (max-width: 655px)': {
    
    width:"auto",
   
    
  }
 
};
const InfoSection = () => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
    
      <InfoContainer  lightBg={false} id={'about'} >
        <Heading lightText={false}>Termelési kapacitás bővítés</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            <TextWrapper> 
             <TopLine></TopLine>
              <Subtitle darkText={true}>
              Az INDUSTAR Ipari Termelő, Kereskedelmi és Szolgáltató Kft. a folyamatos fejlesztés jegyében újabb jelentős beruházást hajtott végre felsőzsolcai telephelyén. A felerészben európai uniós forrásból, GINOP-1.2.1-15-2015-00735 felhívás keretében támogatott projekt összértéke közel 300 millió forint volt, melynek vissza nem térítendő támogatás-tartalma 146,84 millió forint.
              <br/>
              A támogatás segítségével a 2016.10.15 - 2017.03.31 -ig terjedő időszakban az INDUSTAR Kft. a régióban szinte egyedülálló beruházást valósított meg. A termelési kapacitásbővítést célzó projekt keretében beszerzésre került egy korszerű, nagy hatékonyságú három dimenziós lézervágó berendezés, amely új termékpaletta gyártására teszi alkalmassá a vállalatot. A támogatással a cég tovább fokozza versenyképességét a gépjárműiparban, mivel képes lesz a húzott karosszéria elemek, ajtókeretek, ajtók, oldalelemek, sárvédők megmunkálása; vagy a mezőgazdasági gépek húzott dobozszerű alkatrészeinek gyártására is.
              </Subtitle>
              
            </TextWrapper>
            </Column1>
             <Column2>
             
              <ImgWrap>
              <Img src="/images/szechenyi-2020.jpg" alt={'cég'}/>
              </ImgWrap>
              
              <Card sx={cards} onClick={() => window.open(Pdf1)}>
                        
                        <IconButton sx={iconButton} >
                          <DownloadIcon />
                        </IconButton>
                        <Typography sx={text} variant="h5" component="h2">
                        További információk a GINOP-1-2-1-16-2017-00977 támogatásról
                        </Typography>
                        <IconButton sx={iconButton}>
                          <PictureAsPdfIcon />
                        </IconButton>
                       
                      </Card>
              
            </Column2> 
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
