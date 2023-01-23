import React from 'react'
import { Card, CardContent, CardMedia,CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom'


import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper
 } from './ProductsElements'

 const useStyles = makeStyles({
  card: {
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
  },
  image: {
    width: "100%",
    backgroundSize: "cover",
    filter: "blur(2px)",
    transition: "filter 0.1s ease-in-out"
  },
  cardContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    visibility: "visible",
    transition: "visibility 0.1s ease-in-out"
  }
});


const Products = () => {
 
  function handleClick(event) {
  
    if (!event.target.classList.contains('blur')) {
        window.scrollTo({top:0});     
    } 
} 
  const classes = useStyles();
  return (
    <ServicesContainer id="services">
        <ServicesH1>Termékek</ServicesH1>
        <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea onClick={handleClick}  component={RouterLink} to="/products" >
                    <CardMedia className={classes.image}
                      component="img"
                      height="300"
                      src='/images/lada.jpg'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Lada</ServicesH2>
                    <ServicesP>
                     {/*  CNC gépeken végzett 3D csőhajlítás ø8mm-ø76mm-ig ø32mm-i változó sugár is lézeres mérőgéppel ellenőrizve. */}

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card  className={classes.card}>
                  <CardActionArea  onClick={handleClick} component={RouterLink} to="/products" >
                    <CardMedia className={classes.image}
                      component="img"
                      height="300"
                      src='/images/Wartburg.jpg'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Wartburg</ServicesH2>
                    <ServicesP>{/*Élhajlítógép:  3000 mm-es 160 t-ás. Lemezollónk: 3000 mm-es 6 mm-ig. */}</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card  className={classes.card}>
                  <CardActionArea onClick={handleClick} component={RouterLink} to="/products" >
                    <CardMedia className={classes.image}
                      component="img"
                      height="300"
                      image='/images/trabant.jpg'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Trabant</ServicesH2>
                    <ServicesP>
                      {/* Wágner kétoldalas szórófülke, konvejorpályával és gázos beégető kemencével max: darabméret 600 x 800 x 2500 mm. */}
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Products