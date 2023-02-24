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
import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesH3,
  ServicesP,
  ServicesWrapper,
  MapIframe,
  MapContainer
 } from './ContactsElements'


 
const imagestyle={
  width: "100%",
  backgroundSize: "cover",
  filter: "blur(2px)",
  transition: "filter 0.1s ease-in-out"
 
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
const header={
  fontSize: "1.5rem",
  textAlign: "center",
  '@media (max-width: 430px)': {
    
    fontSize: "1rem",
    
  }
}

const Certifications = () => {
 

  return (
    <ServicesContainer id="services">
        <ServicesH1>Telephelyünk és elérhetőségeink</ServicesH1>
        
         <MapIframe   
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5330.602978452486!2d20.86486947354123!3d48.085124307614464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe032076bee39aff4!2sIndustar%20Kft.!5e0!3m2!1shu!2shu!4v1677153788063!5m2!1shu!2shu"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              />
              
        <ServicesWrapper>
                    <Card sx={cardstyle}>
                      
                      <CardHeader
                      sx={header}
                        title="Ügyvezető igazgató"
                        subheader="Török Sándor"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="mailto:torok@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>torok@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneAndroidIcon />
                          </IconButton>
                          <span>+36-20/9455-795</span>
                        </ServicesP>
                        <ServicesP>
                          <IconButton>  
                            <FaxIcon />
                          </IconButton>
                          <span>+36-46/383-475</span>
                        </ServicesP>
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  <Card sx={cardstyle}>
                      <CardHeader
                      sx={{ textAlign: "center" }}
                        title="Titkárság"
                        subheader="Orosz Zoltánné"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="mailto:oroszne@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>oroszne@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneAndroidIcon />
                          </IconButton>
                          <span>+36-20/252-75-91</span>
                        </ServicesP>
                        <ServicesP>
                          <IconButton>  
                            <FaxIcon />
                          </IconButton>
                          <span>+36-46/383-475</span>
                        </ServicesP>
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  </ServicesWrapper>
                  <ServicesWrapper>
                  <Card sx={cardstyle}>
                      <CardHeader
                      sx={{ textAlign: "center" }}
                        title="Minőség- és környezetirányítási vezető"
                        subheader="Szabó Géza"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="szabo@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>szabo@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneAndroidIcon />
                          </IconButton>
                          <span>+36-20/9455-795</span>
                        </ServicesP>
                        
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  
                  
            
            
                    <Card sx={cardstyle}>
                      <CardHeader
                      sx={{ textAlign: "center" }}
                        title="Gazdasági vezető"
                        subheader="Vas Ottóné"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="mailto:konyveles@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>konyveles@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneIcon />
                          </IconButton>
                          <span>+36-46/383-422</span>
                        </ServicesP>
                        <ServicesP>
                          <IconButton>  
                            <PhoneIcon />
                          </IconButton>
                          <span>+36-46/383-475</span>
                        </ServicesP>
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  <Card sx={cardstyle}>
                      <CardHeader
                      sx={{ textAlign: "center" }}
                        title="Műszaki vezető"
                        subheader="Szaxon Csaba"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="mailto:szaxon@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>szaxon@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneAndroidIcon />
                          </IconButton>
                          <span>+36-20/958-05-64</span>
                        </ServicesP>
                        
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  <Card sx={cardstyle}>
                      <CardHeader
                      sx={{ textAlign: "center" }}
                        title="Üzemvezető"
                        subheader="Kismarton Gábor"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="kismarton@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>kismarton@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneAndroidIcon />
                          </IconButton>
                          <span>+36-20/925-53-51</span>
                        </ServicesP>
                        
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  
                  
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle}>
                      <CardHeader
                      sx={{ textAlign: "center" }}
                        title="Karbantartás vezető"
                        subheader="Torma István"
                      />
                      <CardContent>
                      <ServicesP>
                        <IconButton href="istvan.torma@industar.hu">
                          <EmailIcon />
                        </IconButton>
                        <span>istvan.torma@industar.hu</span>
                      </ServicesP>
                        <ServicesP>
                          <IconButton>
                            <PhoneAndroidIcon />
                          </IconButton>
                          <span>+36-20/933-42-13</span>
                        </ServicesP>
                        
                      <ServicesP>
                        {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.  */}

                      </ServicesP>
                      </CardContent>
                  </Card>
                  
            </ServicesWrapper>
           
    </ServicesContainer>
      
  )
}

export default Certifications