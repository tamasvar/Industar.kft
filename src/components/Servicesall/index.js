import React from 'react';
import { 
  Card, CardContent, CardMedia,CardActionArea
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'



import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper
 } from './ServicesElements'

 const cardstyle={
  margin: "1rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)", 
    },
    "&:hover $cardContent": {
      visibility: "hidden"
    },
    "&:hover $image": {
      filter: "blur(0px)"
    }
};
const imagestyle={
  width: "100%",
  backgroundSize: "cover",
  filter: "blur(2px)",
  transition: "filter 0.1s ease-in-out"
};

const cardContent={
  position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    visibility: "visible",
    transition: "visibility 0.1s ease-in-out"
};

const Servicesall = () => {
  function handleClick(event) {
  
    if (!event.target.classList.contains('blur')) {
        window.scrollTo({top:0});     
    } 
  } 
  return (
    <ServicesContainer id="services">          
        <ServicesH1>Szolgáltatások</ServicesH1>       
        <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={handleClick} component={RouterLink} to="/services/csohajlitas" >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/csohajlitas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Csőhajlítás</ServicesH2>
                    <ServicesP>
                      {/* CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/services/lemezmegmunkalas">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/elhajlitas_es_lemez_megmunkalas-1.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lemez megmunkálás</ServicesH2>
                    <ServicesP>{/* Élhajlítógép: 3000 mm-es 160 t-ás. Lemezollónk: 3000 mm-es 6 mm-ig. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/services/elektrosztatikusporszoras" >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/elektrosztatikus_porszoras.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Elektrosztatikus porszórás</ServicesH2>
                    <ServicesP>
                      {/* Wágner kétoldalas szórófülke, konvejorpályával és gázos beégető kemencével max: darabméret 600 x 800 x 2500 mm. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={handleClick} component={RouterLink} to="/services/csodarabolas" >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/csodarabolas-3.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Csődarabolás</ServicesH2>
                    <ServicesP>
                      {/* Csődarabolás CNC darabológépen ø8mm-ø76mm-ig 6000 mm szálból max. 3000 mm külső, belső sorjázással, kötegeléssel. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/services/koordinatalyukasztas">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/koordinata_lyukasztas-1.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Koordináta lyukasztás</ServicesH2>
                    <ServicesP>{/* Euromac lyukasztógépünk 1250x3000 mm-es megmunkálási felülettel rendelkezik, 30t nyomóerővel. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/about">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/furesztarcsa_elezes-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Fűrésztárcsa élezés</ServicesH2>
                    <ServicesP>
                     {/*  Új fűrésztárcsák készítése, felújítása, újra élezés, újra fogazás max: ø325 mm-ig. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/about" >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/forgacsolas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Forgácsolás</ServicesH2>
                    <ServicesP>
                     {/*  Hurko VMX30 CNC megmunkáló központunk igen bonyolult megmunkálási feladatok elvégzésére is képes (3D marás). */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/about">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/lezervagas-3.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lézervágás</ServicesH2>
                    <ServicesP>{/* Bérmunkában vállalunk nagy pontossággal lemez, cső és zártszelvény lézervágását. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/about">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/kemiai_tisztitas.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Kémiai tisztítás</ServicesH2>
                    <ServicesP>
                     {/*  Permetező rendszerű kémiai tisztító, foszfátozó berendezésünkkel maximum 800 mm hosszú alkatrész tisztítását tudjuk elvégezni. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={handleClick} component={RouterLink} to="/about" >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/hegesztes.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hegesztés</ServicesH2>
                    <ServicesP>
                    {/* ABB hegesztő robotunk segítségével impulzusos és rövidzárlatos hegesztéssel (MIG és MAG) a legkülönfélébb anyagokat is meg tudjuk munkálni. */}

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/about">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/szemcseszoras.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Szemcseszórás</ServicesH2>
                    <ServicesP>
                      {/* Zárt rendszerű szemcseszóró berendezésünkkel a porfestésre váró fém alkatrészek felülettisztítását végezzük el. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/about">
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/plazmavagas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
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