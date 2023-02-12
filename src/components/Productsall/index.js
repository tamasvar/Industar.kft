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
 } from './ProductsallElements'

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


const Productsall = () => {
  
  function handleClick(event) {
  
    if (!event.target.classList.contains('blur')) {
        window.scrollTo({top:0});     
    } 
  } 
  return (
    <ServicesContainer id="productsall">          
        <ServicesH1>Termékek</ServicesH1>       
        <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={handleClick} component={RouterLink} to="/products/lada" >
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      
                      src='/images/lada.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lada</ServicesH2>
                    <ServicesP>
                      {/* CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/services/lemezmegmunkalas">
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Lada Samara.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lada Samara</ServicesH2>
                    <ServicesP>{/* Élhajlítógép: 3000 mm-es 160 t-ás. Lemezollónk: 3000 mm-es 6 mm-ig. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/services/elektrosztatikusporszoras" >
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Lada Nova.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lada Nova</ServicesH2>
                    <ServicesP>
                      {/* Wágner kétoldalas szórófülke, konvejorpályával és gázos beégető kemencével max: darabméret 600 x 800 x 2500 mm. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Lada Niva.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lada Niva</ServicesH2>
                    <ServicesP>
                      {/* Csődarabolás CNC darabológépen ø8mm-ø76mm-ig 6000 mm szálból max. 3000 mm külső, belső sorjázással, kötegeléssel. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Wartburg.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Wartburg</ServicesH2>
                    <ServicesP>{/* Euromac lyukasztógépünk 1250x3000 mm-es megmunkálási felülettel rendelkezik, 30t nyomóerővel. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/trabant.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Trabant</ServicesH2>
                    <ServicesP>
                     {/*  Új fűrésztárcsák készítése, felújítása, újra élezés, újra fogazás max: ø325 mm-ig. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/dacia.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Dacia</ServicesH2>
                    <ServicesP>
                     {/*  Hurko VMX30 CNC megmunkáló központunk igen bonyolult megmunkálási feladatok elvégzésére is képes (3D marás). */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/skoda.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Skoda</ServicesH2>
                    <ServicesP>{/* Bérmunkában vállalunk nagy pontossággal lemez, cső és zártszelvény lézervágását. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/skoda favorit.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Skoda Favorit</ServicesH2>
                    <ServicesP>
                     {/*  Permetező rendszerű kémiai tisztító, foszfátozó berendezésünkkel maximum 800 mm hosszú alkatrész tisztítását tudjuk elvégezni. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/mercedes.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Mercedes</ServicesH2>
                    <ServicesP>
                    {/* ABB hegesztő robotunk segítségével impulzusos és rövidzárlatos hegesztéssel (MIG és MAG) a legkülönfélébb anyagokat is meg tudjuk munkálni. */}

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Volkswagen Golf.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Volkswagen Golf</ServicesH2>
                    <ServicesP>
                      {/* Zárt rendszerű szemcseszóró berendezésünkkel a porfestésre váró fém alkatrészek felülettisztítását végezzük el. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Zastava.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Zastava</ServicesH2>
                    <ServicesP>
                     {/* HP260A 3D típusú plazma és lángvágógép, 3000×6000 mm-es asztallal, AJAN CNC vezérléssel. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  component={RouterLink} to="/about" >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/Aro.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Aro</ServicesH2>
                    <ServicesP>
                    {/* ABB hegesztő robotunk segítségével impulzusos és rövidzárlatos hegesztéssel (MIG és MAG) a legkülönfélébb anyagokat is meg tudjuk munkálni. */}

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/moszkvics.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Moszkvics</ServicesH2>
                    <ServicesP>
                      {/* Zárt rendszerű szemcseszóró berendezésünkkel a porfestésre váró fém alkatrészek felülettisztítását végezzük el. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="300"
                      src='/images/polski fiat.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Polski Fiat</ServicesH2>
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

export default Productsall