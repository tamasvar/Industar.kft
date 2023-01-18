import React from 'react';
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


const Servicesall = (
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,

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
                            },
                          }}>
                  <CardActionArea  onClick={toggleHome} component={RouterLink} to="/services/csohajlitas" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/csohajlitas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Csőhajlítás</ServicesH2>
                    <ServicesP>
                      {/* CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea onClick={toggleHome} component={RouterLink} to="/services/lemezmegmunkalas">
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/elhajlitas_es_lemez_megmunkalas-1.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Lemez megmunkálás</ServicesH2>
                    <ServicesP>{/* Élhajlítógép: 3000 mm-es 160 t-ás. Lemezollónk: 3000 mm-es 6 mm-ig. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea onClick={toggleHome} component={RouterLink} to="/services/elektrosztatikusporszoras" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/elektrosztatikus_porszoras.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Elektrosztatikus porszórás</ServicesH2>
                    <ServicesP>
                      {/* Wágner kétoldalas szórófülke, konvejorpályával és gázos beégető kemencével max: darabméret 600 x 800 x 2500 mm. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/csodarabolas-3.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Csődarabolás</ServicesH2>
                    <ServicesP>
                      {/* Csődarabolás CNC darabológépen ø8mm-ø76mm-ig 6000 mm szálból max. 3000 mm külső, belső sorjázással, kötegeléssel. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/koordinata_lyukasztas-1.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Koordináta lyukasztás</ServicesH2>
                    <ServicesP>{/* Euromac lyukasztógépünk 1250x3000 mm-es megmunkálási felülettel rendelkezik, 30t nyomóerővel. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/furesztarcsa_elezes-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Fűrésztárcsa élezés</ServicesH2>
                    <ServicesP>
                     {/*  Új fűrésztárcsák készítése, felújítása, újra élezés, újra fogazás max: ø325 mm-ig. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            }, 
                          }}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/forgacsolas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Forgácsolás</ServicesH2>
                    <ServicesP>
                     {/*  Hurko VMX30 CNC megmunkáló központunk igen bonyolult megmunkálási feladatok elvégzésére is képes (3D marás). */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/lezervagas-3.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Lézervágás</ServicesH2>
                    <ServicesP>{/* Bérmunkában vállalunk nagy pontossággal lemez, cső és zártszelvény lézervágását. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/kemiai_tisztitas.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Kémiai tisztítás</ServicesH2>
                    <ServicesP>
                     {/*  Permetező rendszerű kémiai tisztító, foszfátozó berendezésünkkel maximum 800 mm hosszú alkatrész tisztítását tudjuk elvégezni. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/hegesztes.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Hegesztés</ServicesH2>
                    <ServicesP>
                    {/* ABB hegesztő robotunk segítségével impulzusos és rövidzárlatos hegesztéssel (MIG és MAG) a legkülönfélébb anyagokat is meg tudjuk munkálni. */}

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/szemcseszoras.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Szemcseszórás</ServicesH2>
                    <ServicesP>
                      {/* Zárt rendszerű szemcseszóró berendezésünkkel a porfestésre váró fém alkatrészek felülettisztítását végezzük el. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{
                            ':hover': {
                              transform: "scale3d(1.05, 1.05, 1)", 
                            },
                          }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      src='/images/plazmavagas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent>
                    <ServicesH2>Plazmavágás</ServicesH2>
                    <ServicesP>
                     {/* HP260A 3D típusú plazma és lángvágógép, 3000×6000 mm-es asztallal, AJAN CNC vezérléssel. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Servicesall