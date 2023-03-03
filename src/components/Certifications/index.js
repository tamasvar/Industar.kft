import React from 'react'
import { 
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Button,
  IconButton,
  Typography
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FaxIcon from '@mui/icons-material/Fax';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Pdf1 from '../../pdf/eves_energetikai_szakreferensi_riport_2020.pdf'
import Pdf2 from '../../pdf/tanusitvany_KIR_magyar_HU19794-21_2021-09-09.pdf'
import Pdf3 from '../../pdf/tanusitvany_KIR_angol_HU19794-21_2021-09-09.pdf'
import Pdf4 from '../../pdf/tanusitvany_MEBIR_magyar_45001_HU19794-21_2021-09-09.pdf'
import Pdf5 from '../../pdf/tanusitvany_MEBIR_angol_45001_HU19794-21_2021-09-09.pdf'
import Pdf6 from '../../pdf/tanusitvany_MIR_magyar_HU19794-21_2021-09-09.pdf'
import Pdf7 from '../../pdf/tanusitvany_MIR_angol_HU19794-21_2021-09-09.pdf'


import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesH3,
  ServicesP,
  ServicesWrapper,
  MapIframe,
  MapContainer,
  Img,
  ImgWrap
 } from './CertificationsElements'


 
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
 
};
const button={
  textAlign: "center",
  position: "relative",
  margin:"auto",
  color:"black",
  
};
const cardstyle={
  backgroundColor: "#C8E6C9",
  width:"300px",
  height:"250px",
  margin: "1rem",
  display: "box", 
  alignItems: "center", 
  justifyContent: "center",
  "&:hover": {
    transform: "scale3d(1.05, 1.05, 1)", 
  },
  '@media (max-width: 430px)': {
    
    width:"250px",
    height:"250px",
    
  }
  
  
};
const cardContent={
  position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    visibility: "visible",
    transition: "visibility 0.1s ease-in-out"
    
};
const text= {
  textAlign: "center",
  flex: "1",
};
const iconButton= {
  padding: "0.5rem",

};
const header={
  fontSize: "1.5rem",
  textAlign: "center",
  '@media (max-width: 430px)': {
    
    fontSize: "1rem",
    
  }
}

const Contacts = () => {
 

  return (
    <ServicesContainer id="services">
        <ServicesH1>Letölthető tanúsítványaink és dokumentumaink</ServicesH1>
        <ServicesWrapper>
                  <ImgWrap>
                  <Img src="/images/certop.jpg" alt={'cég'}/>
                  </ImgWrap>
                        <Card sx={cards} onClick={() => window.open(Pdf1)}>
                        
                      <IconButton sx={iconButton} >
                        <DownloadIcon />
                      </IconButton>
                      <Typography sx={text} variant="h5" component="h2">
                      Éves energetikai szakreferensi riport 2020
                      </Typography>
                      <IconButton sx={iconButton}>
                        <PictureAsPdfIcon />
                      </IconButton>
                     
                    </Card>
                    <Card sx={cards} onClick={() => window.open(Pdf2)}>
                        
                        <IconButton sx={iconButton} >
                          <DownloadIcon />
                        </IconButton>
                        <Typography sx={text} variant="h5" component="h2">
                        Tanúsitvány ISO 14001:2015 HUN
                        </Typography>
                        <IconButton sx={iconButton}>
                          <PictureAsPdfIcon />
                        </IconButton>
                       
                      </Card>
                      <Card sx={cards} onClick={() => window.open(Pdf3)}>
                        
                      <IconButton sx={iconButton} >
                        <DownloadIcon />
                      </IconButton>
                      <Typography sx={text} variant="h5" component="h2">
                      Tanúsitvány ISO 14001:2015 ENG
                      </Typography>
                      <IconButton sx={iconButton}>
                        <PictureAsPdfIcon />
                      </IconButton>
                     
                    </Card>
                    <Card sx={cards} onClick={() => window.open(Pdf4)}>
                        
                      <IconButton sx={iconButton} >
                        <DownloadIcon />
                      </IconButton>
                      <Typography sx={text} variant="h5" component="h2">
                      Tanúsitvány ISO 45001:2018 HUN
                      </Typography>
                      <IconButton sx={iconButton}>
                        <PictureAsPdfIcon />
                      </IconButton>
                     
                    </Card>
                    <Card sx={cards} onClick={() => window.open(Pdf5)}>
                        
                      <IconButton sx={iconButton} >
                        <DownloadIcon />
                      </IconButton>
                      <Typography sx={text} variant="h5" component="h2">
                      Tanúsitvány ISO 45001:2018 ENG
                      </Typography>
                      <IconButton sx={iconButton}>
                        <PictureAsPdfIcon />
                      </IconButton>
                     
                    </Card>
                    <Card sx={cards} onClick={() => window.open(Pdf6)}>
                        
                      <IconButton sx={iconButton} >
                        <DownloadIcon />
                      </IconButton>
                      <Typography sx={text} variant="h5" component="h2">
                      Tanúsitvány ISO 9001:2015 HUN
                      </Typography>
                      <IconButton sx={iconButton}>
                        <PictureAsPdfIcon />
                      </IconButton>
                     
                    </Card>
                    <Card sx={cards} onClick={() => window.open(Pdf7)}>
                        
                      <IconButton sx={iconButton} >
                        <DownloadIcon />
                      </IconButton>
                      <Typography sx={text} variant="h5" component="h2">
                      Tanúsitvány ISO 9001:2015 ENG
                      </Typography>
                      <IconButton sx={iconButton}>
                        <PictureAsPdfIcon />
                      </IconButton>
                     
                    </Card>
            
            </ServicesWrapper>
           
    </ServicesContainer>
      
  )
}

export default Contacts