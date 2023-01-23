import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia,CardActionArea } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';

import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,

  ServicesWrapper
 } from './ServicesElements'

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



const Services = () => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  
 function handleClick(event) {
  
    if (!event.target.classList.contains('blur')) {
        window.scrollTo({top:0});     
    } 
} 
  const classes = useStyles();
  return (
    <ServicesContainer id="services">
        <ServicesH1>Szolgáltatások</ServicesH1>
        <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={handleClick} component={RouterLink} to="/services">
                    <CardMedia className={classes.image}
                      component="img"
                      height="300"
                      src='/images/csohajlitas-4.jpg'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Csőhajlítás</ServicesH2>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card}>
                  <CardActionArea  onClick={toggleHome} component={RouterLink} to="/services" >
                    <CardMedia className={classes.image}
                      component="img"
                      height="300"
                      src='/images/elhajlitas_es_lemez_megmunkalas-1.jpg'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Lemez megmunkálás</ServicesH2>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card}>
                  <CardActionArea onClick={toggleHome} component={RouterLink} to="/services" >
                    <CardMedia className={classes.image}
                      component="img"
                      height="300"
                      image='../../images/elektrosztatikus_porszoras.jpg'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Elektrosztatikus porszórás</ServicesH2>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services