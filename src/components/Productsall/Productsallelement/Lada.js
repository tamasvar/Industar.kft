import React,{useState } from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionImage'
import { lada } from '../../HeroSectionImage/data'
import { 
  Card, CardContent, CardMedia,CardActionArea,FormControl,InputLabel,Select,MenuItem

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";


import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  Img
 } from './Productsallelement'

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
  formLabel: {
    fontSize: 20,
    textAlign: "center",
  },
  formControl: {
   
    backgroundColor: "#4caf50",
    display: "flex",
    alignItems: "center",
  },
  cardContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    visibility: "visible",
    transition: "visibility 0.1s ease-in-out"
  },
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  
});

const Lada = () => {
  
  
  const classes = useStyles();
  const[isOpen,setIsOpen]=useState(false)
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [selectedId, setSelectedId] = useState("lada");

  const handleOpen = (img) => {
    setOpen(true)
    setImage(img)
  };

  const handleClose = () => {
    setOpen(false)
    setImage(null)
  };
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection {...lada}/>
          <FormControl className={classes.formControl}>
          <InputLabel  id="select-label" className={classes.formLabel}>Válaszd ki az alkatrészt</InputLabel>
          <Select 
            labelId="select-label"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            <MenuItem value="lada">Lada általános</MenuItem>
            <MenuItem value="lada1">Lada niva</MenuItem>
          </Select>
        </FormControl>
        {selectedId === "lada" &&<ServicesContainer id="lada" >          
        <ServicesH1>Karosszéria elemek</ServicesH1>       
        <ServicesWrapper>
                  <Modal className={classes.style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card className={classes.card} >
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Taposó nagy.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Taposó nagy.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Taposó nagy</ServicesH2>
                    <ServicesP>
                      Lower dash panel small
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Taposó kicsi.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Taposó kicsi.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Taposó kicsi</ServicesH2>
                    <ServicesP>Lower dash panel big</ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hosszgerendás taposó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerendás taposó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hosszgerendás taposó</ServicesH2>
                    <ServicesP>
                      Cross-member lower dash
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Hosszgerenda.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerenda.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hosszgerenda</ServicesH2>
                    <ServicesP>
                    Cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hosszgerenda toldat.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerenda toldat.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}> 
                    <ServicesH2>Hosszgerenda toldat</ServicesH2>
                    <ServicesP> Cross-member extension</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hátsó doblemez.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hátsó doblemez.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hátsó doblemez</ServicesH2>
                    <ServicesP>
                     Rear inner wheel arch
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Középhűtőtartó gerenda(1200).png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Középhűtőtartó gerenda(1200).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1200)</ServicesH2>
                    <ServicesP>
                    Cross-member center lower 
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Középhűtőtartó gerenda(1500).png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Középhűtőtartó gerenda(1500).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1500)</ServicesH2>
                    <ServicesP>Cross-member center lower</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Oldalsó hűtőtartó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Oldalsó hűtőtartó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Oldalsó hűtőtartó</ServicesH2>
                    <ServicesP>
                     Lateral radiator cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Oldalsó hűtőtartó összekötő.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Oldalsó hűtőtartó összekötő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Oldalsó hűtőtartó összekötő</ServicesH2>
                    <ServicesP>
                    Lateral radiator cross-member connection

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Porvédő sapka.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Porvédő sapka.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Porvédő sapka</ServicesH2>
                    <ServicesP>
                      Antidust cover
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Pótkeréktartó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Pótkeréktartó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Pótkeréktartó</ServicesH2>
                    <ServicesP>
                     Spare-wheel compartment
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Pótkeréktartó(1500).png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Pótkeréktartó(1500).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Pótkeréktartó<br/>(1500)</ServicesH2>
                    <ServicesP>
                    Spare-wheel compartment

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Tanktartó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Tanktartó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Tanktartó</ServicesH2>
                    <ServicesP>
                      Fuel tank holder
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Elülső emelő.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Elülső emelő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Elülső emelő</ServicesH2>
                    <ServicesP>
                     Front jack
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Hátsó emelő.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                     
                      src='/images/lada/Hátsó emelő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hátsó emelő</ServicesH2>
                    <ServicesP>
                    Rear jack

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Szerelt hátsó emelőbak.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Szerelt hátsó emelőbak.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Szerelt hátsó emelőbak</ServicesH2>
                    <ServicesP>
                      Mounted rear ground jack
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Szerelt hátsó emelőbak gépi emelővel.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Szerelt hátsó emelőbak gépi emelővel.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Szerelt hátsó emelőbak_gépi emelővel</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "lada1" &&<ServicesContainer id="lada1" style={{height:"2200px"}}>          
        <ServicesH1>Karosszéria elemek</ServicesH1>       
        <ServicesWrapper>
                  <Modal className={classes.style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card className={classes.card} >
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Taposó nagy.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Taposó nagy.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Taposó nagy</ServicesH2>
                    <ServicesP>
                      Lower dash panel small
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Taposó kicsi.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Taposó kicsi.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Taposó kicsi</ServicesH2>
                    <ServicesP>Lower dash panel big</ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hosszgerendás taposó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerendás taposó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hosszgerendás taposó</ServicesH2>
                    <ServicesP>
                      Cross-member lower dash
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Hosszgerenda.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerenda.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hosszgerenda</ServicesH2>
                    <ServicesP>
                    Cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hosszgerenda toldat.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerenda toldat.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}> 
                    <ServicesH2>Hosszgerenda toldat</ServicesH2>
                    <ServicesP> Cross-member extension</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hátsó doblemez.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Hátsó doblemez.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hátsó doblemez</ServicesH2>
                    <ServicesP>
                     Rear inner wheel arch
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Középhűtőtartó gerenda(1200).png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Középhűtőtartó gerenda(1200).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1200)</ServicesH2>
                    <ServicesP>
                    Cross-member center lower 
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Középhűtőtartó gerenda(1500).png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Középhűtőtartó gerenda(1500).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1500)</ServicesH2>
                    <ServicesP>Cross-member center lower</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Oldalsó hűtőtartó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Oldalsó hűtőtartó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Oldalsó hűtőtartó</ServicesH2>
                    <ServicesP>
                     Lateral radiator cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Oldalsó hűtőtartó összekötő.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Oldalsó hűtőtartó összekötő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Oldalsó hűtőtartó összekötő</ServicesH2>
                    <ServicesP>
                    Lateral radiator cross-member connection

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Porvédő sapka.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Porvédő sapka.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Porvédő sapka</ServicesH2>
                    <ServicesP>
                      Antidust cover
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Pótkeréktartó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Pótkeréktartó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Pótkeréktartó</ServicesH2>
                    <ServicesP>
                     Spare-wheel compartment
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Pótkeréktartó(1500).png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Pótkeréktartó(1500).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Pótkeréktartó<br/>(1500)</ServicesH2>
                    <ServicesP>
                    Spare-wheel compartment

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Tanktartó.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Tanktartó.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Tanktartó</ServicesH2>
                    <ServicesP>
                      Fuel tank holder
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Elülső emelő.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      src='/images/lada/Elülső emelő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Elülső emelő</ServicesH2>
                    <ServicesP>
                     Front jack
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Hátsó emelő.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                     
                      src='/images/lada/Hátsó emelő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Hátsó emelő</ServicesH2>
                    <ServicesP>
                    Rear jack

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Szerelt hátsó emelőbak.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Szerelt hátsó emelőbak.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Szerelt hátsó emelőbak</ServicesH2>
                    <ServicesP>
                      Mounted rear ground jack
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Szerelt hátsó emelőbak gépi emelővel.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Szerelt hátsó emelőbak gépi emelővel.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Szerelt hátsó emelőbak_gépi emelővel</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Szélvédőkeret javító.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                     
                      src='/images/lada/Szélvédőkeret javító.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Szélvédőkeret javító</ServicesH2>
                    <ServicesP>
                      Windscreen frame arch
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Doblemeztorony.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Doblemeztorony.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Doblemez<br/>torony</ServicesH2>
                    <ServicesP>
                      Inner wheel arch column
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Doblemezmerevítő.png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Doblemezmerevítő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Doblemez<br/>merevítő</ServicesH2>
                    <ServicesP>
                    Inner wheel arch belt
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card className={classes.card}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Keresztmerevítő.png')} >
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                     
                      src='/images/lada/Keresztmerevítő.png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Keresztmerevítő</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Sárvédő javítóív rövid(2101).png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Sárvédő javítóív rövid(2101).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Sárvédő javítóív rövid(2101)</ServicesH2>
                    <ServicesP>
                     
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card className={classes.card} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Sárvédő javítóív hosszú(2101).png')}>
                    <CardMedia className={classes.image}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Sárvédő javítóív hosszú(2101).png'
                      alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                    <ServicesH2>Sárvédő javítóív hosszú(2101)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
    </ServicesContainer>}
    <Footer/>
    </>
  )
}

export default Lada