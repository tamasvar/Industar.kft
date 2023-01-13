import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';

import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper
 } from './ServicesElements'


const Services = (
  Icon1,
  Icon2,
  Icon3,
) => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }

  return (
    <ServicesContainer id="services">
        <ServicesH1>Szolgáltatások</ServicesH1>
        <ServicesWrapper>
                    <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },height: 350 
                          }}>
                  <CardActionArea onClick={toggleHome} component={RouterLink} to="/services" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/csohajlitas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Csőhajlítás</ServicesH2>
                    <ServicesP>
                      CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve.

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },height: 350 
                          }} >
                  <CardActionArea  onClick={toggleHome} component={RouterLink} to="/services" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/elhajlitas_es_lemez_megmunkalas-1.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Lemez megmunkálás</ServicesH2>
                    <ServicesP>Élhajlítógép: 3000 mm-es 160 t-ás. Lemezollónk: 3000 mm-es 6 mm-ig.</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },height: 350 
                          }} >
                  <CardActionArea onClick={toggleHome} component={RouterLink} to="/services" >
                    <CardMedia
                      component="img"
                      height="200"
                      image='../../images/elektrosztatikus_porszoras.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Elektrosztatikus porszórás</ServicesH2>
                    <ServicesP>
                      Wágner kétoldalas szórófülke, konvejorpályával és gázos beégető kemencével max: darabméret 600 x 800 x 2500 mm.
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services